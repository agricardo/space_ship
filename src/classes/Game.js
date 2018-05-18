export default class Game {
  constructor(world, player) {
    this.world = world;
    this.player = player;
    this.playing = false;
  }

  start(canvas, ctx) {
    console.log('start');
    this.playing = true;
    this.initialize(canvas, ctx);
  }

  initialize(canvas, ctx) {
    let loop = () => {
      this.draw(ctx);

      if (this.playing) {
        window.requestAnimationFrame(loop, canvas);
      }
    };
    window.requestAnimationFrame(loop, canvas);
  }

  draw(ctx) {
    // console.log('drawing');
    ctx.clearRect(0, 0, this.world.w, this.world.h);

    this.player.draw(ctx);

    if (Object.keys(this.player.weapon.shooting).length) {
      for (var i in this.player.weapon.shooting) {
        this.player.weapon.shooting[i].draw(ctx, () => {
          this.player.weapon.destroy(this.player.weapon.shooting[i].number)
        });
      }
    }

    ctx.save();
    ctx.restore();
  }
}