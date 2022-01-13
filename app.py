from flask import Flask,render_template,request
import json

app = Flask(__name__)

#main page
@app.route('/')
def main_page():
	return render_template('main.html')

# POST API to give response accordingly
#API is available at http://127.0.0.1:5000/jsonapi
@app.route('/jsonapi',methods=["POST"])
def json_api():

    json_str =request.get_json(force=True) 
    # if json obj has atleast two key-value pairs then api returns json_str and 201 status code 
    if(len(json_str)>=2):    
        return json_str,201
    else:                     #else it return status code 400
        return "",400

# main driver function
if __name__ == '__main__':
	app.run(debug=True)
