function doIt(){

    const word1 = document.getElementById("word1");

    word1.addEventListener("change", checkWord);

    var ANSWER = Math.floor(Math.random() * 100)+1;


    function checkWord(e){
        var guessArray = this.value.split();
        var answerArray = ANSWER.split();

        for(var i = 0; i < 5; i++){

        }


        alert("Hello");
        console.log(this);
        console.log(this.value);
        console.log(e);
    }
}
doIt();