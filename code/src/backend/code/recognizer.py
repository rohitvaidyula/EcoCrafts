import tensorflow as tf
import os
import matplotlib.pyplot as plt
from tensorflow.keras import models, layers
from tensorflow.keras.preprocessing.image import ImageDataGenerator

##Loading the Data and splitting into Training/Validation for the Model

data_path = "C:\\Users\\vaidy\\Documents\\CEM\\backend\\dataset\\Warp-D"

data = ImageDataGenerator(rescale = 1/255, 
                          validation_split = 0.2, 
                          horizontal_flip = True,
                          rotation_range = 45)

training_data = data.flow_from_directory(os.path.join(data_path, 'train'),
                                         target_size = (224, 224),
                                         batch_size = 100,
                                         subset = 'training')

val_data = data.flow_from_directory(os.path.join(data_path, 'train'),
                                    target_size = (224, 224),
                                    batch_size = 100,
                                    subset = 'validation')

### Example of an image


##Model Training
rec_model = tf.keras.models.Sequential([
    layers.Dense(256, activation = "relu"),
    layers.Dense(128, activation = "relu"),
])

