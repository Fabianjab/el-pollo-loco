class StatusBar extends DrawableObject {

    height = 50;
    width = 150;

    IMAGES_STATUSBAR_HEALTH = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png', // 0
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png' // 5
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_STATUSBAR_HEALTH);
        this.x = 30;
        this.y = 10;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_STATUSBAR_HEALTH[this.resolveImageIndex(this.percentage)];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}