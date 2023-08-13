var images = ["cat.png", "tavotevas.webp"];
var keyInput = "";
var imageSelect = 1

var AudioPlaying = false;

function AudioStopped(){;
    AudioPlaying = false;
};

function doTheFunny(){
    if (!AudioPlaying) {
        if (keyInput == "CAT") {
            imageSelect = 0;
        };
        document.body.innerHTML = '';
        var body = document.getElementById('body');
        var image = document.createElement('p');
        image.style.background = "url(images/"+images[imageSelect]+") no-repeat center center";
        image.style.backgroundSize = "contain";
        image.id = "tevas";

        body.appendChild(image);

        var audio = new Audio('sounds/cave1.mp3');
        audio.onended = AudioStopped;
        audio.id = "audio";
        document.getElementById("tevas").style.animationDuration =  "3s";
        AudioPlaying = true;
        audio.play()
        };
};

window.addEventListener("keypress", easteregg);

function easteregg(key){
    var input = key.code.replace("Key", "");
    console.log(key.code.replace("Key", ""));
    switch (keyInput){
        case "":
            if (input == "C"){
                keyInput += "C";
            }else {
                keyInput = "";
            };
            break;
        case "C":
            if (input == "A"){
                keyInput += "A";
            } else{
                keyInput = "";
            };
            break;
        case "CA":
            if (input == "T"){
                keyInput += "T";
            }
            else {
                keyInput = "";
            };
            break;
        default:
            keyInput = "";
            console.log("Cat mode failed")
    }
    console.log(keyInput)
}
