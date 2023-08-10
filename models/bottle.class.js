class Bottle extends DrawableObject {
    constructor() {
        super().loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.x = 300 + Math.random() * 1500;
        this.y = 350;
        this.height = 80;
        this.width = 70;
    }
}