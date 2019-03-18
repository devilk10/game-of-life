const neighbours = require('./utility.js');

class Cell {
    constructor() {
        this.isAlive = false;
    }
    alive() {
        this.isAlive = true;
    }
};
module.exports = Cell;


class Game {
    constructor(size) {
        this.size = size;
        this.ground = new Array(size * size).fill(new Cell());
    }
    placeLive(index) {
        return this.ground[index].alive();
    }
    isAlive(index) {
        return this.ground[index].isAlive;
    }
    getNeighbours(index) {
        return neighbours(this.ground, index);
    }
    underPopulationRule(index) {
        this.getNeighbours(index);
    }
    start() {
        this.ground.map((cell, index)=> {
            this.underPopulationRule(index);
        })
    }
}
module.exports = Game;