from flask import Flask, request, jsonify
from flask_cors import CORS
from ultralytics import YOLO
import numpy as np
import os 
from PIL import Image
import base64
import cv2 as cv
#Initialize Flask application
app = Flask(__name__)
CORS(app)

labels_dict = {
    1: "Aluminium foil",
    2: "Bottle cap",
    3: "Bottle",
    4: "Broken glass",
    5: "Can",
    6: "Carton",
    7: "Cigarette",
    8: "Cup",
    9: "Lid",
    10: "Other litter",
    11: "Other plastic",
    12: "Paper",
    13: "Plastic bag - wrapper",
    14: "Plastic container",
    15: "Pop tab",
    16: "Straw",
    17: "Styrofoam piece",
    18: "Unlabeled litter"
}

def get_label(image):
    trained_model = YOLO('C:\\Users\\vaidy\\Documents\\EcoCrafts\\code\\backend\\server\\runs\\detect\\train5\\weights\\best.pt')
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
    recipe_dir_path = 'C:\\Users\\vaidy\\Documents\\EcoCrafts\\code\\backend\\recipes\\' + str(resulting_label)
    recipe_folder_list = []
    for f in os.listdir(recipe_dir_path):
        recipe_folder_list.append(str(f))
    
    for item in recipe_folder_list:
        folder_name = recipe_dir_path + "\\"+ item
        folder = os.listdir(folder_name)
        for file in folder:
            with open(os.path.join(file)) as f:
                print(f.read())


    
    return resulting_label


if __name__ == '__main__':
    app.run(debug=True)