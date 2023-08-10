class Endboss extends MovableObject {

    height = 300;
    width = 200;
    y = 140;
    world;
    win_sound = new Audio('audio/win.mp3');

    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'

    ];

    IMAGES_HURT = [
        "img/4_enemie_boss_chicken/4_hurt/G21.png",
        "img/4_enemie_boss_chicken/4_hurt/G22.png",
        "img/4_enemie_boss_chicken/4_hurt/G23.png"
    ];

    IMAGES_DEAD = [
        "img/4_enemie_boss_chicken/5_dead/G24.png",
        "img/4_enemie_boss_chicken/5_dead/G25.png",
        "img/4_enemie_boss_chicken/5_dead/G26.png"
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 1800;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING)
        }, 200);

        setInterval(() => {

            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                setTimeout(function () {
                    document.getElementById('canvas').style = "display:none";
                    document.getElementById('winning').style = "display:";
                    document.getElementById('play_again').style = "display:";
                    document.getElementById('new_game').style = "display:none";
                }, 2000);
                this.win_sound.play();

                setTimeout(() => {
                    this.win_sound.pause();
                }, 2900);
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else {

                if (this.moveLeft()) {
                    this.x += this.speed;
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
        }, 50);
    }











}