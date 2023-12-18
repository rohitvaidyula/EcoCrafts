from flask import Flask, request
from ultralytics import YOLO
import numpy as np
from PIL import Image
import base64
import cv2 as cv
#Initialize Flask application
app = Flask(__name__)

trained_model = YOLO('model.pt')
results = trained_model.predict('screenshot.jpg')

for result in results:
    boxes = result.boxes.cpu().numpy()
    for box in boxes:
        r = box.xyxy[0].astype(int)
        print(r)







if __name__ == '__main__':
    app.run(debug=True)