import {Game, World, Player, Weapon } from './classes';
import{load} from './resources';

const elements = [
    {
        id: "spaceship",
        src: "./images/spaceship.png"
    },
    {
        id: "rocket",
        src: "./images/rocket.png"
    }
];

load(elements, (resources) => {
    if (Object.keys(resources).length === elements.length) {
        let spaceship = resources['spaceship'];
        let rocket = resources['rocket'];

        let container = document.getElementById('root');
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext("2d");

        let world = new World();
        let weapon = new Weapon(world, rocket);
        let player = new Player(world, weapon, spaceship);
        let game = new Game(world, player);

        canvas.id = 'canvas';
        canvas.width = world.w;
        canvas.height = world.h;

        container.prepend(canvas);

        document.addEventListener("keydown", function(e){
            if (e.keyCode === 37) {
                player.move('left');
                console.log("left");
            }
            if (e.keyCode === 38) {
                player.move('up');
                console.log("up");
            }
            if (e.keyCode === 39) {
                player.move('right');
                console.log("rigt");
            }
            if (e.keyCode === 40) {
                player.move('down');
                console.log("down")
            }
            
        });

        document.addEventListener("keyup", function(e){
            if(e.keyCode === 32){
                player.shoot();
            }
        });
        
        window.addEventListener("resize", function (e) {
            world.dimensions(window.innerWidth, window.innerHeight);
            canvas.width = world.w;
            canvas.height = world.h;
        });
        
        game.start(canvas, ctx);

    }
});


