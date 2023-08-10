class Level {
    enemies;
    clouds;
    fondo;
    level_end_x = 2200;
    bottle;
    coin;

    constructor(enemies, clouds, fondo, bottle, coin){
        this.enemies = enemies;
        this.clouds = clouds;
        this.fondo = fondo;
        this.bottle = bottle;
        this.coin = coin;
    };
}