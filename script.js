function doIt(){

    const word1 = document.getElementById("word1");
    const word2 = document.getElementById("word2");
    const word3 = document.getElementById("word3");
    const word4 = document.getElementById("word4");
    const word5 = document.getElementById("word5");
    const word6 = document.getElementById("word6");
    word1.addEventListener("change", checkWord);
    word2.addEventListener("change", checkWord);
    word3.addEventListener("change", checkWord);
    word4.addEventListener("change", checkWord);
    word5.addEventListener("change", checkWord);
    word6.addEventListener("change", checkWord);

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