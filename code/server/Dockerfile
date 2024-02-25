FROM python:3.10.1

COPY requirements.txt .

RUN pip install -r rquirements.txt 

COPY . .

EXPOSE 5000

CMD ["python", "app.py"]