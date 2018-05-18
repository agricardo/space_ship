class Rocket {
    constructor(x, y, w, h, n, world, image){
        this.w = 60;
        this.h = 11;
        this.x = x;
        this.y = y - this.h/2;
        this.velocity = 6;
        this.damage = 100;
        this.number = n;
        this.world = world;
        this.image = image;
    }

    draw(ctx, destroy) {
        if ((this.x + this.w) < this.world.w) {
            ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
            this.x += this.velocity;
        }
        else{
            let explode = new Audio('audio/explosion.wav');
            explode.play();
            destroy();
        }
    }
}

export default class Weapon {
    constructor(world, image){
        this.shooting = {};
        this.count = 0;
        this.world = world;
        this.rockets = 100;
        this.image = image;
    }

    shoot(x, y, w, h){
        if(this.count < this.rockets) {
            let rocket = new Rocket(x, y, w, h, ++this.count, this.world, this.image);
            this.shooting[this.count] = rocket;
        }
        else{
            console.log("out of ammo");
        }
    }

    destroy(n){
        delete this.shooting[n];
    }
}