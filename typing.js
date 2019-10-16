let letters = ["a", "d", "f", "g", "h", "j", "k", "l", "s",]
let letter = letters[Math.floor(Math.random()*letters.length)]
let correct = 0;
let inCorrect = 0;
let toType = "";

console.log("this is the letter to type: " + letter);
function updateCorrect () {
    document.querySelector("#correct").innerHTML = correct;
};

function updateInCorrect () {
    document.querySelector("#inCorrect").innerHTML = inCorrect;
};

$("#toType").append(letter)

document.onkeyup = function(event){
    let typed = $("#textInput").val()
    console.log(typed)
    if (typed === letter) {
        correct++;
        updateCorrect();
        $("#textInput").val('')
        letter = letters[Math.floor(Math.random()*letters.length)];
        $("#toType").text(letter)
    } else {
        $("#textInput").val('')
        inCorrect++
        updateInCorrect();

    }
};