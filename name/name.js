//grab the DOM elements by their ids
var uName = document.getElementById("name");
var gender = document.getElementById("gender");
var button = document.getElementById("button");
var output = document.getElementById("output");

//set functionality on click of the button
button.onclick = function(){
    console.log(uName.value);
    console.log(isNotEmpty(uName.value));
    if(isNotEmpty(uName.value) && makeSelection(gender.value)){ //if both the uName AND gender fields have a selection
        if(gender.value === "male"){ //if the selection was boy. The value was taken from the select tag, not the text inside of it
            output.innerHTML = "Hello Mr. " + uName.value;
        }
        else{ //otherwise, greet the user with a girl's salutation
            output.innerHTML = "Hello Miss. " + uName.value;
        }
    }
    else{ //otherwise, (that is, if either the uName and gender fields were empty) do the following
        if(isNotEmpty(uName.value)){ //if the uName field has a value then tell the user to provide a gender
            output.innerHTML = "Please indicate a gender";
        }
        else if(makeSelection(gender.value)){ //if the gender field has a value then tell the user to provide a uName
            output.innerHTML = "Please provide a name";
        }
        else{ //otherwise (that is, if neither the uName nor the gender were provided), tell the user to provide both a uName and a gender
            output.innerHTML = "Please provide a name and gender";
        }
    }
}

//defined functions
function isNotEmpty(anystring){
    //input here is a parameter for any incoming string
    if(anystring === null || anystring === undefined || anystring === ""){
        return false; //if input is null OR undefined OR "" (this is empty) then isNotEmpty returns a value of false
    }
    else{
        return true; //otherwise (in this case, the input meets none of those requirements above), return a value of true
    }
}

function makeSelection(selection){
    if(selection === "none"){
        return false; //if selection equals a string of "none" then this function returns false
    }
    else{
        return true; //otherwise (in this case, the selection is NOT a string of "none") this runction returns true
    }
}