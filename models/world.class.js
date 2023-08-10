class World {

    character = new Character();
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    level = level1;
    statusBar = new StatusBar();
    statusBottle = new StatusBottle();
    statusCoin = new StatusCoin();
    statusEndboss = new StatusEndboss();
    throwableObjects = [];
    amountCoins = [];
    thrownBottle;
    hitBottle = new Audio('audio/bottle.mp3');

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.checkCollisionsCoins();
            this.checkCollisionsBottle();
            this.checkCollisionsEndboss();
        }, 200);
    }

    checkThrowObjects() {
        if (this.keyboard.D && collectedBottles.length > 0 && barometerBottles > 0) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
            collectedBottles.slice(bottle);
            this.statusBottle.setPercentage(barometerBottles);
            this.statusBottle.loadImages(this.statusBottle.IMAGES_STATUS_BOTTLE);
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
                this.character.loadImages(this.character.IMAGES_HURT);
            }
        });
    }

    checkCollisionsCoins() {
        this.level.coin.forEach((Coin, index) => {
            if (this.character.isColliding(Coin)) {
                this.character.collectCoins();
                this.statusCoin.setPercentage(barometerCoins);
                this.amountCoins.push(Coin);
                this.statusCoin.loadImages(this.statusCoin.IMAGES_STATUS_COIN);
                this.level.coin.splice(index, 1);
            }
        });
    }

    checkCollisionsBottle() {
        this.level.bottle.forEach((Bottle, index) => {
            if (this.character.isColliding(Bottle)) {
                this.character.collectBottles();
                this.statusBottle.setPercentage(barometerBottles);
                collectedBottles.push(Bottle);
                console.log('Anzahl eingesammelte', collectedBottles);
                console.log('Anzahl Bottles', barometerBottles);
                this.statusBottle.loadImages(this.statusBottle.IMAGES_STATUS_BOTTLE);
                this.level.bottle.splice(index, 1);
            }
        });
    }

    checkCollisionsEndboss() {
        this.throwableObjects.forEach((thrownBottle, index) => {
            if (this.level.enemies[3].isColliding(thrownBottle)) {
                this.level.enemies[3].energy -= 20;
                this.statusEndboss.setPercentage(this.level.enemies[3].energy);
                this.statusEndboss.loadImages(this.statusEndboss.IMAGES_STATUSBAR_ENDBOSS);
                this.hitBottle.play();
                this.throwableObjects.splice(index, 1);
                this.level.enemies[3].loadImages(this.level.enemies[3].IMAGES_HURT);
            }
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.fondo);
        this.addObjectsToMap(this.level.clouds);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBottle);
        this.addToMap(this.statusCoin);
        this.addToMap(this.statusEndboss);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.bottle);
        this.addObjectsToMap(this.level.coin);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.ctx.translate(-this.camera_x, 0);
        let self = this;

        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo); 0
        }
    }
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}