var t1 = document.getElementById("t1");
var inputs = t1.querySelectorAll("input");

//This would normally come from the server
var correctAnswer = "smart";
var userGuess = "";
var guessCount = 0;

for(var i = 0; i < inputs.length; i++){
  console.log(inputs[i]);
  inputs[i].addEventListener("change", checkInput);
}
function checkInput(event){
  alert("Checked" + this.value);
  console.log(event);
  console.log(this);
  //if guessCount == 5 do things
  //if not don't
  if(guessCount == 5) doThings();
}
//goal: activate input boxes
function doThings(){
    
}