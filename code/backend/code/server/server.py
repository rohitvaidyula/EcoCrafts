from flask import Flask


#Initialize Flask application
app = Flask(__name__)

#Routes
@app.route('/results')
def return_result():
    return "Testing - Ft. A$AP Rocky"


if __name__ == '__main__':
    app.run(debug=True)