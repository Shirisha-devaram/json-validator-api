// This function validates json input from the user
// It shows alert for wrong json object
//It updates UI according to number of key value pairs in the json object

function isValidJson() {
    var form_data = document.getElementById("usrform").value;
    try {
        JSON.parse(form_data);
        //calling post api
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://127.0.0.1:5000/jsonapi");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
            //if status code is 201 then showing UI as mentioned
            if (xhr.readyState === 4 && xhr.status == 201) {
                var body_field = "";
                var obj = JSON.parse(form_data);
                for (const prop in obj) {
                    body_field += `<label>${prop}</label>
                      <input type="text" value=${obj[prop]}><br>`
                }
                document.body.innerHTML = body_field;
            }
            // else showing an error msg as bad user input
            else if (xhr.readyState === 4 && xhr.status == 400) {
                var body_field = "<h3>Bad User input</h3>";
                document.body.innerHTML = body_field;
            }
        };
        var data = form_data;
        xhr.send(data);
        return true;
    } catch (e) {
        //showing alert if input of the user is in invalid json format
        alert("Please enter a valid json string !!!")
        document.getElementById("usrform").value = "";
        console.log("not a json object")
        return false;
    }
}
