class Coin extends DrawableObject {
    
    offset = {
        top: 45,
        left: 0,
        right: 0,
        bottom: 45,
    };
    
    constructor() {
        super().loadImage('img/8_coin/coin_1.png');
        this.x = 300 + Math.random() * 1500;
        this.y = 330 + Math.random() * -200;;
        this.height = 140;
        this.width = 140;
    }
}