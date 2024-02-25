FROM python:3.10.1

COPY requirements.txt .

RUN pip install -r requirements.txt 

RUN ["chmod", "+x", "./start.sh"]

RUN apt-get update && apt-get install ffmpeg libsm6 libxext6  -y

COPY . .

EXPOSE 5000

CMD ["python", "app.py"]