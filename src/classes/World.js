export default class World{
    constructor() {
        this.w = window.innerWidth;
        this.h = window.innerHeight;
    }

    dimensions(w, h) {
        this.w = w;
        this.h = h;
    }
}