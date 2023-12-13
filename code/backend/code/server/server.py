from flask import Flask, request
from ultralytics import YOLO
import numpy as np
from PIL import Image
import base64
import cv2 as cv
#Initialize Flask application
app = Flask(__name__)

#Store strings for label and IMG with bounding boxes
label = ""

#Takes
def get_label_and_img(image):
    model = YOLO('yolov8n.pt')
    results = model.train(data='C:\\Users\\vaidy\\Documents\\CEM\\code\\backend\\dataset\\TACO\\data.yaml', epochs = 1, batch = 20, device = 'cpu')

    img = Image.fromarray(image)
    results = model.predict(img)
    result = results[0]
    box = result.boxes[0]
    class_label = box.cls[0].item()    
    return class_label
#Routes
@app.route("/send_image", methods=["POST"])
def compute_image():
    image_source = request.get_json()
    base64_img = image_source["image"]
    base64_data = base64_img.split(',')
    img_data = base64.b64decode(base64_data[1])
    np_image = np.fromstring(img_data, dtype=np.uint8)
    decoded_img = cv.imdecode(np_image, flags=cv.IMREAD_GRAYSCALE)
    img_color = cv.cvtColor(decoded_img, cv.COLOR_BGR2RGB)

    results = get_label_and_img(img_color)

    
    print(results)

    return ""






if __name__ == '__main__':
    app.run(debug=True)