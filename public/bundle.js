!function(e){var n={};function r(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s="./src/index.js")}({"./src/classes/Game.js":
/*!*****************************!*\
  !*** ./src/classes/Game.js ***!
  \*****************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Game = function () {\n  function Game(world, player) {\n    _classCallCheck(this, Game);\n\n    this.world = world;\n    this.player = player;\n    this.playing = false;\n  }\n\n  _createClass(Game, [{\n    key: 'start',\n    value: function start(canvas, ctx) {\n      console.log('start');\n      this.playing = true;\n      this.initialize(canvas, ctx);\n    }\n  }, {\n    key: 'initialize',\n    value: function initialize(canvas, ctx) {\n      var _this = this;\n\n      var loop = function loop() {\n        _this.draw(ctx);\n\n        if (_this.playing) {\n          window.requestAnimationFrame(loop, canvas);\n        }\n      };\n      window.requestAnimationFrame(loop, canvas);\n    }\n  }, {\n    key: 'draw',\n    value: function draw(ctx) {\n      var _this2 = this;\n\n      // console.log('drawing');\n      ctx.clearRect(0, 0, this.world.w, this.world.h);\n\n      this.player.draw(ctx);\n\n      if (Object.keys(this.player.weapon.shooting).length) {\n        for (var i in this.player.weapon.shooting) {\n          this.player.weapon.shooting[i].draw(ctx, function () {\n            _this2.player.weapon.destroy(_this2.player.weapon.shooting[i].number);\n          });\n        }\n      }\n\n      ctx.save();\n      ctx.restore();\n    }\n  }]);\n\n  return Game;\n}();\n\nexports.default = Game;\n\n//# sourceURL=webpack:///./src/classes/Game.js?")},"./src/classes/PLayer.js":
/*!*******************************!*\
  !*** ./src/classes/PLayer.js ***!
  \*******************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Player = function () {\n    function Player(world, weapon, image) {\n        _classCallCheck(this, Player);\n\n        this.h = 100;\n        this.w = 100;\n        this.x = 100;\n        this.y = world.h / 2 - 50;\n        this.health = 2000;\n        this.shooting = {};\n        this.weapon = weapon;\n        this.world = world;\n        this.image = image;\n\n        this.velY = 0;\n        this.velX = 0;\n        this.speed = 6;\n        this.friction = 0.98;\n    }\n\n    _createClass(Player, [{\n        key: 'move',\n        value: function move(direction) {\n            if (direction === 'left') {\n                if (this.velX > -this.speed) {\n                    this.VelX--;\n                }\n            }\n            if (direction === 'up') {\n                if (this.velY > -this.speed) {\n                    this.velY--;\n                }\n            }\n            if (direction === 'right') {\n                if (this.velX < this.speed) {\n                    this.velX++;\n                }\n            }\n            if (direction === 'down') {\n                if (this.velY < this.speed) {\n                    this.velY++;\n                }\n            }\n\n            this.velY *= this.friction;\n            this.velX *= this.friction;\n\n            this.x = Math.max(Math.min(this.x + this.velX, this.world.w - this.w), 0);\n            this.y = Math.max(Math.min(this.y + this.velY, this.world.h - this.h), 0);\n        }\n    }, {\n        key: 'draw',\n        value: function draw(ctx) {\n            ctx.font = '30px serif';\n            ctx.fillStyle = '#fff';\n            ctx.fillText('H ' + this.health, 10, 30);\n            ctx.fillText('R ' + (this.weapon.rockets - this.weapon.count), 150, 30);\n\n            ctx.drawImage(this.image, this.x, this.y, this.w, this.h);\n        }\n    }, {\n        key: 'shoot',\n        value: function shoot() {\n            this.weapon.shoot(this.x + this.w / 2, this.y + this.h / 2);\n        }\n    }]);\n\n    return Player;\n}();\n\nexports.default = Player;\n\n//# sourceURL=webpack:///./src/classes/PLayer.js?")},"./src/classes/Weapon.js":
/*!*******************************!*\
  !*** ./src/classes/Weapon.js ***!
  \*******************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nvar Rocket = function () {\n    function Rocket(x, y, w, h, n, world, image) {\n        _classCallCheck(this, Rocket);\n\n        this.w = 60;\n        this.h = 11;\n        this.x = x;\n        this.y = y - this.h / 2;\n        this.velocity = 6;\n        this.damage = 100;\n        this.number = n;\n        this.world = world;\n        this.image = image;\n    }\n\n    _createClass(Rocket, [{\n        key: "draw",\n        value: function draw(ctx, destroy) {\n            if (this.x + this.w < this.world.w) {\n                ctx.drawImage(this.image, this.x, this.y, this.w, this.h);\n                this.x += this.velocity;\n            } else {\n                var explode = new Audio(\'audio/explosion.wav\');\n                explode.play();\n                destroy();\n            }\n        }\n    }]);\n\n    return Rocket;\n}();\n\nvar Weapon = function () {\n    function Weapon(world, image) {\n        _classCallCheck(this, Weapon);\n\n        this.shooting = {};\n        this.count = 0;\n        this.world = world;\n        this.rockets = 100;\n        this.image = image;\n    }\n\n    _createClass(Weapon, [{\n        key: "shoot",\n        value: function shoot(x, y, w, h) {\n            if (this.count < this.rockets) {\n                var rocket = new Rocket(x, y, w, h, ++this.count, this.world, this.image);\n                this.shooting[this.count] = rocket;\n            } else {\n                console.log("out of ammo");\n            }\n        }\n    }, {\n        key: "destroy",\n        value: function destroy(n) {\n            delete this.shooting[n];\n        }\n    }]);\n\n    return Weapon;\n}();\n\nexports.default = Weapon;\n\n//# sourceURL=webpack:///./src/classes/Weapon.js?')},"./src/classes/World.js":
/*!******************************!*\
  !*** ./src/classes/World.js ***!
  \******************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nvar World = function () {\n    function World() {\n        _classCallCheck(this, World);\n\n        this.w = window.innerWidth;\n        this.h = window.innerHeight;\n    }\n\n    _createClass(World, [{\n        key: "dimensions",\n        value: function dimensions(w, h) {\n            this.w = w;\n            this.h = h;\n        }\n    }]);\n\n    return World;\n}();\n\nexports.default = World;\n\n//# sourceURL=webpack:///./src/classes/World.js?')},"./src/classes/index.js":
/*!******************************!*\
  !*** ./src/classes/index.js ***!
  \******************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _Game = __webpack_require__(/*! ./Game */ "./src/classes/Game.js");\n\nObject.defineProperty(exports, \'Game\', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Game).default;\n  }\n});\n\nvar _World = __webpack_require__(/*! ./World */ "./src/classes/World.js");\n\nObject.defineProperty(exports, \'World\', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_World).default;\n  }\n});\n\nvar _Weapon = __webpack_require__(/*! ./Weapon */ "./src/classes/Weapon.js");\n\nObject.defineProperty(exports, \'Weapon\', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Weapon).default;\n  }\n});\n\nvar _PLayer = __webpack_require__(/*! ./PLayer */ "./src/classes/PLayer.js");\n\nObject.defineProperty(exports, \'Player\', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_PLayer).default;\n  }\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack:///./src/classes/index.js?')},"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\n\nvar _classes = __webpack_require__(/*! ./classes */ "./src/classes/index.js");\n\nvar _resources = __webpack_require__(/*! ./resources */ "./src/resources/index.js");\n\nvar elements = [{\n    id: "spaceship",\n    src: "./images/spaceship.png"\n}, {\n    id: "rocket",\n    src: "./images/rocket.png"\n}];\n\n(0, _resources.load)(elements, function (resources) {\n    if (Object.keys(resources).length === elements.length) {\n        var spaceship = resources[\'spaceship\'];\n        var rocket = resources[\'rocket\'];\n\n        var container = document.getElementById(\'root\');\n        var canvas = document.createElement(\'canvas\');\n        var ctx = canvas.getContext("2d");\n\n        var world = new _classes.World();\n        var weapon = new _classes.Weapon(world, rocket);\n        var player = new _classes.Player(world, weapon, spaceship);\n        var game = new _classes.Game(world, player);\n\n        canvas.id = \'canvas\';\n        canvas.width = world.w;\n        canvas.height = world.h;\n\n        container.prepend(canvas);\n\n        document.addEventListener("keydown", function (e) {\n            if (e.keyCode === 37) {\n                player.move(\'left\');\n                console.log("left");\n            }\n            if (e.keyCode === 38) {\n                player.move(\'up\');\n                console.log("up");\n            }\n            if (e.keyCode === 39) {\n                player.move(\'right\');\n                console.log("rigt");\n            }\n            if (e.keyCode === 40) {\n                player.move(\'down\');\n                console.log("down");\n            }\n        });\n\n        document.addEventListener("keyup", function (e) {\n            if (e.keyCode === 32) {\n                player.shoot();\n            }\n        });\n\n        window.addEventListener("resize", function (e) {\n            world.dimensions(window.innerWidth, window.innerHeight);\n            canvas.width = world.w;\n            canvas.height = world.h;\n        });\n\n        game.start(canvas, ctx);\n    }\n});\n\n//# sourceURL=webpack:///./src/index.js?')},"./src/resources/index.js":
/*!********************************!*\
  !*** ./src/resources/index.js ***!
  \********************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\nvar load = exports.load = function load(elements, resolve) {\n    var resources = {};\n    elements.forEach(function (elm) {\n        var image = new Image();\n        image.src = elm.src;\n        image.id = elm.id;\n        image.onload = function () {\n            resources[elm.id] = image;\n            resolve(resources);\n        };\n    });\n};\n\n//# sourceURL=webpack:///./src/resources/index.js?')}});