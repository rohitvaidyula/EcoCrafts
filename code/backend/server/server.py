from flask import Flask, request, jsonify
from flask_cors import CORS
from ultralytics import YOLO
import os 
import base64
import cv2 as cv
from dataclasses import dataclass
#Initialize Flask application
app = Flask(__name__)
CORS(app)

labels_dict = {
    1: "bottle",
    2: "can",
    3: "carton",
    4: "cigarette",
    5: "cup",
    6: "glass",
    7: "paper",
    8: "plastic",
    9: "straw",
}

@dataclass
class Recipe:
    Name: str = ""
    Material: str = ""
    Recipe: str = ""

abs_path = os.path.dirname(__file__) 

def get_label(image):
    relative_path = "runs\\detect\\train\\weights\\best.pt"
    full_path = os.path.join(abs_path, relative_path)
    trained_model = YOLO(full_path)
    results = trained_model.predict(image)
    single_label = ""
    labels = []
    if (len(results) > 1):
        for result in results:
            boxes = result.boxes.numpy()
            for box in boxes:
                label = box.cls[-1]
                label = label.astype(int).item()
                labels.append(labels_dict[label])
        return labels
    else:
        for result in results:
            boxes = result.boxes.numpy()
            for box in boxes:
                label = box.cls[-1]
                label = label.astype(int).item()
                single_label = labels_dict[label + 1]
        return single_label


@app.route("/send_image", methods=["POST"])
def compute_image():
    image_source = request.get_json()
    base64_img = image_source["image"]
    base64_data = base64_img.split(',')
    img_data = base64.b64decode(base64_data[1])

    imgFile = open('screenshot.jpg', 'wb')
    imgFile.write(img_data)
    imgFile.close()

    return ""


@app.route("/results", methods = ["GET"])
def send_result():
    resulting_label = get_label('screenshot.jpg')
    recipe_dir_path = abs_path + '\\recipes\\' + str(resulting_label)
    recipe_folder_list = []
    recipes_list = []
    for f in os.listdir(recipe_dir_path):
        recipe_folder_list.append(str(f))
    
    for item in recipe_folder_list:
        folder_name = recipe_dir_path + "\\"+ item
        mat_route = folder_name + "\\" + "mat.txt"
        recipe_route = folder_name + "\\" + "recipe.txt"
        with open(mat_route, 'r') as x, open(recipe_route, 'r') as y:
            recipes_list.append(Recipe(item, x.read(), y.read()))

    return jsonify({"recipes": recipes_list})

if __name__ == '__main__':
    app.run(debug=True)