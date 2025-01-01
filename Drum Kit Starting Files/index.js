let drumset = document.querySelectorAll('.drum');
drumset.forEach((drum) => {
    drum.addEventListener('click', function () {
        let key = drum.innerHTML;
        console.log(key);
        playSound(key);
    });
});

drumset.forEach((drum) => {
    drum.addEventListener('keydown', function (event) {
        let k = event.key;
        console.log(k);
        playSound(k);
    });
});

function playSound(key) {
    let audio = null;
    switch (key) {
        case 'w':
            audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case 'k':
            audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case 'l':
            audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        default:
            console.log("Invalid key");
            break;
    }
}