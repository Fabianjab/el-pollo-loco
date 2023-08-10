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

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 38) {
        keyboard.UP = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 68) {
        keyboard.D = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 68) {
        keyboard.D = false;
    }
});

function fullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    enterFullscreen(fullscreen);
};

function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFUllscreen) {
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitRequestFullscreen) {
        document.webkitRequestFullscreen();
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
    document.getElementById('winning').style = "display:none";
    document.getElementById('startscreen').style = "display:none";
    document.getElementById('canvas').style = "display:";
    document.getElementById('start_game').style = "display:none";
    document.getElementById('new_game').style = "display:flex";
    initLevel();
    init();
}

function mobileButtons() {
    const iconLeft = document.getElementById('icon_left');
    const iconRight = document.getElementById('icon_right');
    const iconJump = document.getElementById('icon_jump');
    const iconThrow = document.getElementById('icon_throw');

    iconLeft.addEventListener('touchstart', () => {
        keyboard.LEFT = true;
    });
    iconLeft.addEventListener('touchend', () => {
        keyboard.LEFT = false;
    });

    iconRight.addEventListener('touchstart', () => {
        keyboard.RIGHT = true;
    });
    iconRight.addEventListener('touchend', () => {
        keyboard.RIGHT = false;
    });

    iconJump.addEventListener('touchstart', () => {
        keyboard.SPACE = true;
    });
    iconJump.addEventListener('touchend', () => {
        keyboard.SPACE = false;
    });

    iconThrow.addEventListener('touchstart', () => {
        keyboard.D = true;
    });
    iconThrow.addEventListener('touchend', () => {
        keyboard.D = false;
    });

}

function showInfo() {
    document.getElementById('infotext').style = "display:";
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
    document.getElementById('infotext').style = "display:none";
}

