let canvas;
let world;
let keyboard = new Keyboard();
barometerCoins = 0;
barometerBottles = 0;
barometerEndboss = 0;
fullBarometer = 100;
titleMusic = new Audio('audio/music.mp3');
var musicPlaying = false;
collectedBottles = [];

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    mobileButtons();
}

function handleKeyDown(e) {
    switch (e.key) {
        case "ArrowRight":
            keyboard.RIGHT = true;
            break;
        case "ArrowLeft":
            keyboard.LEFT = true;
            break;
        case "ArrowDown":
            keyboard.DOWN = true;
            break;
        case "ArrowUp":
            keyboard.UP = true;
            break;
        case " ":
            keyboard.SPACE = true;
            break;
        case "d":
            keyboard.D = true;
            break;
    }
}

function handleKeyUp(e) {
    switch (e.key) {
        case "ArrowRight":
            keyboard.RIGHT = false;
            break;
        case "ArrowLeft":
            keyboard.LEFT = false;
            break;
        case "ArrowDown":
            keyboard.DOWN = false;
            break;
        case "ArrowUp":
            keyboard.UP = false;
            break;
        case " ":
            keyboard.SPACE = false;
            break;
        case "d":
            keyboard.D = false;
            break;
    }
}

function playSound() {
    if (musicPlaying) {
        titleMusic.pause();
        musicPlaying = false;
    } else {
        titleMusic.play();
        musicPlaying = true;
    }
}

function startGame() {
    document.getElementById('winning').style.display = "none";
    document.getElementById('startscreen').style.display = "none";
    document.getElementById('canvas').style.display = "";
    document.getElementById('start_game').style.display = "none";
    document.getElementById('new_game').style.display = "flex";
    initLevel();
    init();
}

function mobileButtons() {
    const iconLeft = document.getElementById('icon_left');
    const iconRight = document.getElementById('icon_right');
    const iconJump = document.getElementById('icon_jump');
    const iconThrow = document.getElementById('icon_throw');

    iconLeft.addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.LEFT = true;
    });
    iconLeft.addEventListener('touchend', () => {
        keyboard.LEFT = false;
    });

    iconRight.addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.RIGHT = true;
    });
    iconRight.addEventListener('touchend', () => {
        keyboard.RIGHT = false;
    });

    iconJump.addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.SPACE = true;
    });
    iconJump.addEventListener('touchend', () => {
        keyboard.SPACE = false;
    });

    iconThrow.addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.D = true;
    });
    iconThrow.addEventListener('touchend', () => {
        keyboard.D = false;
    });
}

function showInfo() {
    document.getElementById('infotext').style.display = "";
    let infoText = document.getElementById('infotext');

    infoText.innerHTML = `
    <div id="infoText">
    "Instructions: Control the character Pepe by using the arrow keys to move, press the spacebar to make him jump, and use the 'd' key to throw bottles. Your objective is to defeat the final boss. Take down the boss by accurately throwing bottles at him. Be cautious, as chickens will attempt to harm you during your journey, causing damage. To showcase your skill, collect coins that will grant you additional points."
    <br><span id="closeInfo" onclick="closeInfo()"> <b> CLOSE INFO </b> </span>
    </div>
    `;
    return infoText;
}

function closeInfo() {
    document.getElementById('infotext').style.display = "none";
}

window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);
