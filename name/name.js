//grab the DOM elements by their ids
var name = document.getElementById("name");
var gender = document.getElementById("gender");
var button = document.getElementById("button");
var output = document.getElementById("output");

//set functionality on click of the button
button.onclick = function(){
    if(isNotEmpty(name.value) && makeSelection(gender.value)){
        if(gender.value === "male"){
            output.innerHTML = "Hello Mr. " + name.value;
        }
        else{
            output.innerHTML = "Hello Miss. " + name.value;
        }
    }
    else{
        if(isNotEmpty(name.value)){
            output.innerHTML = "Please indicate a gender";
        }
        else if(makeSelection(gender.value)){
            output.innerHTML = "Please provide a name";
        }
        else{
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