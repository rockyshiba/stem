var uName = document.getElementById("uInput");
var uButton = document.getElementById("button");
var uOutput = document.getElementById("output");

uButton.onclick = function(){
	console.log(name.value);
	if(uName.value === undefined || uName.value === null || uName.value === ""){
		uOutput.innerHTML = "Please provide a name";
	}
	else{
		uOutput.innerHTML = "Hello " + uName.value + ".";
	}
}