var images = ["cat.png", "tavotevas.webp", "sad.jpg"];
var sounds = ["cave1.mp3", "fart.mp3"]
var keyInput = "";
var imageSelect = 1
var soundSelect = 0
var wordsCheck;

var AudioPlaying = false;

function AudioStopped(){;
    AudioPlaying = false;
};

function doTheFunny(){
    if (!AudioPlaying) {
        switch (keyInput){
            case "CAT":
                imageSelect = 0;
                soundSelect = 0;
                break;
            case "SAD":
                imageSelect = 2;
                soundSelect = 1;
                break;
            default:
                imageSelect = 1;
                soundSelect = 0;
                break;
        };
        document.body.innerHTML = '';
        var body = document.getElementById('body');
        var image = document.createElement('p');
        image.style.background = "url(images/"+images[imageSelect]+") no-repeat center center";
        image.style.backgroundSize = "contain";
        image.id = "tevas";

        var audio = new Audio('sounds/'+sounds[soundSelect]);
        audio.onended = AudioStopped;
        audio.id = "audio";
        audio.preload = "metadata";

        audio.onloadedmetadata = function() {
            image.style.animationDuration =  audio.duration + "s";
            body.appendChild(image);
            console.log(audio.duration)
            AudioPlaying = true;
            audio.play()
        };
    };
};

window.addEventListener("keypress", easteregg);

var LeftOverWords;

function easteregg(key){
    var input = key.code.replace("Key", "");
    var wordFound = false;
    console.log("input = "+input)

    var words = ["CAT", "SAD"];
    if (keyInput.length == 0){
        wordsCheck = words;
    };
    console.log(wordsCheck);

    LeftOverWords = wordsCheck
    keyInputBeforeCheck = keyInput

    for (let word in wordsCheck) {
        console.log(`Checking `+wordsCheck[word])

        if (wordsCheck[word][keyInputBeforeCheck.length] == input){
            console.log(`added `+input);
            keyInput += input;
            wordFound = true;
            continue;
        }
        else {
            console.log(wordsCheck[word]+` is not the word, removing.`)
            delete LeftOverWords[word];
            continue;
        };
    };


    if (!wordFound){
        keyInput = "";
        console.log("Word not found, clearing word cache.")
        console.log(wordsCheck);
    };
    wordsCheck = LeftOverWords;
};
