var images = ["cat.png", "tavotevas.webp", "sad.jpg", "cursedObama.gif", "maciute.jpg"];
var sounds = ["cave1.mp3", "fart.mp3", "knock.mp3", "sus.mp3"]
const words = ["CAT", "SAD", "OBAMA", "MACIUTE"];
var keyInput = "";
var imageSelect = 1
var soundSelect = 0
var wordsCheck;

var AudioPlaying = false;

// function AudioStopped(close){; //Doesn't allow user to press on the screen until the audio finishes playing
//     AudioPlaying = false;
//     //document.body.innerHTML = '';
// };

function doTheFunny(){ // on click command
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
            case "OBAMA":
                imageSelect = 3;
                soundSelect = 2;
                break;
            case "MACIUTE":
                imageSelect = 4;
                soundSelect = 3;
                break
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
        // audio.onended = AudioStopped;
        audio.id = "audio";
        audio.preload = "metadata";

        audio.onloadedmetadata = function() {
            image.style.animationDuration =  audio.duration + "s";
            body.appendChild(image);
            console.log(audio.duration)
            // AudioPlaying = true;
            audio.play()
        };
    };
};

window.addEventListener("keypress", easteregg);

var LeftOverWords;

function easteregg(key){ //Checks for key input
    var input = key.code.replace("Key", "");
    var letterFound = false;
    console.log("input = "+input);

    if (keyInput.length == 0){
        wordsCheck = words;
    };

    if (wordsCheck.length == 1 && wordsCheck[0] == keyInput){ // this is here so when you type in a code for easter egg you can then immediately type in another code without having to fail first by typing in a letter that doesn't match wordsCheck[0]
        keyInput = "";
        wordsCheck = words;
        console.log("RESET ACTIVATED")
    };

    keyInputBeforeCheck = keyInput;
    var removedWords = [];

    for (let word in wordsCheck) {
        if (wordsCheck[word][keyInputBeforeCheck.length] == input){
            if (letterFound) {continue;};
            keyInput += input;
            letterFound = true;
            continue;
            console.log(wordsCheck[word]+` stays`);
        }
        else {
            console.log(wordsCheck[word]+` REMOVED`);
            removedWords.push(wordsCheck[word]);
            continue;
        };
    };
    if (!letterFound){
        keyInput = "";
    };
    //removing words that have been detected to not have checked letters
    wordsCheck = wordsCheck.filter((el)=> !removedWords.includes(el)); 
    console.log('Words in the list: '+wordsCheck.length)
};