function doTheFunny(){
    document.body.innerHTML = '';
    var audio = new Audio('sounds/cave1.mp3');
    var body = document.getElementById('body');
    var image = document.createElement('p');
    image.className = "tevas";
    body.appendChild(image)
    audio.play()
};
