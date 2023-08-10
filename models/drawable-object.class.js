class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 85;
    height = 230;
    width = 110;
    offset = 0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {

        if (this instanceof Character || this instanceof Chicken || this instanceof Bottle || this instanceof Coin || this instanceof Endboss || this instanceof ThrowableObject) {
            ctx.beginPath();
            ctx.lineWidth = '4';
            ctx.strokeStyle = 'transparent';
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top - this.offset.left - this.offset.right, this.width, this.height - this.offset.top - this.offset.bottom);
            ctx.stroke();
        }
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    collectCoins() {
        barometerCoins += 10;
        if (barometerCoins < 0) {
            barometerCoins = 0;
        } else {
            fullBarometer = new Date().getTime();
        }
    }

    collectBottles() {
        barometerBottles += 10;
        if (barometerBottles < 0) {
            barometerBottles = 0;
        } else {
            fullBarometer = new Date().getTime();
        }
    }
}