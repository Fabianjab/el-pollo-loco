class ThrowableObject extends MovableObject {

    energyEndboss = 100;

    IMAGES_BOTTLE_ROTATION = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ]

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.IMAGES_BOTTLE_ROTATION);
        this.x = x - 50;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();
    }

    throw() {
        if (collectedBottles.length > 0) {
            this.speedY = 40;
            this.applyGravitiy();
            setInterval(() => {
                this.x += 5;
                this.y += 5;
            }, 25);
            setInterval(() => {
                this.playAnimation(this.IMAGES_BOTTLE_ROTATION);
            }, 200);
            this.loseBottle();
            console.log('Amount Bottles', barometerBottles);
        }
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLE_ROTATION);
        }, 200);
    }

    loseBottle() {
        barometerBottles -= 10;
        if (barometerBottles < 0) {
            barometerBottles = 0;
        } else {
            fullBarometer = new Date().getTime();
        };
    }
}