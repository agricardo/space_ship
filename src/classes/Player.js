export default class Player {
    constructor(world, weapon, image) {
        this.h = 100;
        this.w = 100;
        this.x = 100;
        this.y = world.h / 2 - 50;
        this.health = 2000;
        this.shooting = {};
        this.weapon = weapon;
        this.world = world;
        this.image = image;

        this.velY = 0;
        this.velX = 0;
        this.speed = 6;
        this.friction = 0.98;
    }

    move(direction) {
        // console.log('moving');
        if (direction === 'left') {
            if (this.velX > -this.speed) {
                this.velX-=3;
            }
        }
        if (direction === 'up') {
            if (this.velY > -this.speed) {
                this.velY-=3;
            }
        }
        if (direction === 'right') {
            if (this.velX < this.speed) {
                this.velX+=3;
            }
        }
        if (direction === 'down') {
            if (this.velY < this.speed) {
                this.velY+=3;
            }
        }

        this.velY *= this.friction;
        this.velX *= this.friction;

        this.x = Math.max(Math.min(this.x + this.velX, this.world.w - this.w), 0);

        this.y = Math.max(Math.min(this.y + this.velY, this.world.h - this.h), 0);

    }

    draw(ctx) {
        // console.log('player ', this);
        ctx.font = '30px serif';
        ctx.fillStyle = '#fff';
        ctx.fillText('H ' + (this.health), 10, 30);
        ctx.fillText('R ' + (this.weapon.rockets - this.weapon.count), 150, 30);

        ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    }

    shoot() {
        this.weapon.shoot(this.x + this.w / 2, this.y + this.h / 2);
    }
}