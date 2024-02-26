FROM python:3.10.1

COPY requirements.txt .

COPY --chmod=0755 start.sh .

RUN pip install -r requirements.txt 

RUN apt-get update && apt-get install ffmpeg libsm6 libxext6  -y

COPY . .

EXPOSE 5000

CMD ["python", "app.py"]

CMD ["gunicorn", "-b", "0.0.0.0:5000", "app:ecocrafts"]