class Fondo extends MovableObject {

    height = 480;
    width = 720;
    x = 0;

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.y = 480 - this.height;
        this.x = x;
    };
}