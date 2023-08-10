class StatusEndboss extends MovableObject {

    height = 50;
    width = 150;

    IMAGES_STATUSBAR_ENDBOSS = [
        ('img/statusbar_endboss/blue/blue0.png'),
        ('img/statusbar_endboss/blue/blue20.png'),
        ('img/statusbar_endboss/blue/blue40.png'),
        ('img/statusbar_endboss/blue/blue60.png'),
        ('img/statusbar_endboss/blue/blue80.png'),
        ('img/statusbar_endboss/blue/blue100.png')
    ]

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_STATUSBAR_ENDBOSS);
        this.x = 550;
        this.y = 15;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_STATUSBAR_ENDBOSS[this.resolveImageIndex(this.percentage)];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 60) {
            return 3;
        } else if (this.percentage >= 40) {
            return 2;
        } else if (this.percentage >= 20) {
            return 1;
        } else {
            return 0;
        }
    }
}