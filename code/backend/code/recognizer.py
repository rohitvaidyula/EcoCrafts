import os
import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.callbacks import EarlyStopping
from tensorflow.keras.preprocessing.image import load_img

dataset_path = 'C:\\Users\\vaidy\\Documents\\CEM\\code\\backend\\dataset\\Warp-D\\'

datagen = ImageDataGenerator(rescale=1./255,
                             validation_split=0.3,
                             horizontal_flip=True,
                             rotation_range=45)

train_data = datagen.flow_from_directory(os.path.join(dataset_path, 'train'),
                                         target_size=(224, 224),
                                         batch_size=100,
                                         subset='training')
val_data = datagen.flow_from_directory(os.path.join(dataset_path, 'train'),
                                       target_size=(224, 224),
                                       batch_size=100,
                                       subset='validation')

model = tf.keras.models.Sequential([
    tf.keras.layers.Conv2D(20, (3, 3), activation='relu', input_shape=(224, 224, 3)),
    tf.keras.layers.MaxPooling2D(1, 1),
    tf.keras.layers.Dropout(0.3),
    tf.keras.layers.Conv2D(20, (3, 3), activation='relu', input_shape=(224, 224, 3)),
    tf.keras.layers.MaxPooling2D(2, 2),
    tf.keras.layers.Dropout(0.1),
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(1, activation='sigmoid')
])

model.compile(optimizer='adam',
              loss='binary_crossentropy',
              metrics=['accuracy'])
early_stopping = EarlyStopping(monitor='loss', patience=10, restore_best_weights=True)
model_history=model.fit(train_data, validation_data=val_data, callbacks=[early_stopping])
val_loss=model_history.history['val_loss']

test_data = datagen.flow_from_directory(os.path.join(dataset_path, 'test'),
                                        target_size=(224, 224),
                                        batch_size=100,
                                        shuffle=False)

loss, accuracy = model.evaluate(test_data)
print('Test loss:', loss)
print('Test accuracy:', accuracy)

image_path = 'C:\\Users\\vaidy\\Documents\\CEM\\code\\backend\\dataset\\Warp-S\\JPEGImages\\bottle-blue_test_Monitoring_photo_2_test_25-Mar_11-36-59_01.jpg'
image = load_img(image_path, target_size=(224, 224))
image_array = tf.keras.preprocessing.image.img_to_array(image)
image_array = image_array / 255.0

image_array = image_array.reshape((1, 224, 224, 3))
predictions = model.predict(image_array)
confidence = predictions[0]

class_label = 'plastic waste' if confidence >= 0.50 else 'non-plastic waste'
print('Prediction:', class_label)
print('Confidence:', confidence)

model.save('C:\\Users\\vaidy\\Documents\\CEM\\code\\frontend\\src\\my_model.keras')                               