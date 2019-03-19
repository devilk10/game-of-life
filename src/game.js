const neighbours = require('./utility.js');
const Cell = require('./Cell.js');

class Game {
    constructor(size) {
        this.size = size;
        this.ground = new Array(size * size).fill(0).map(a => new Cell(false));
    }
    randomLives(places) {
        places.map(place => this.placeLive(place));
        this.start(1);
    }
    placeLive(index) {
        return this.ground[index].alive();
    }
    isAlive(index) {
        return this.ground[index].isAlive;
    }
    filterDeadCell(cells) {
        return cells.filter(cell => cell.isAlive);
    }
    getNeighbours(index) {
        return neighbours(this.ground, index, this.size);
    }
    populationRule(index) {
        let liveCellsCount = this.filterDeadCell(this.getNeighbours(index)).length;
        return !(liveCellsCount > 3 || liveCellsCount < 2 ? this.ground[index].die() : this.ground[index].alive());
    }
    reproductionRule(index) {
        return this.filterDeadCell(this.getNeighbours(index)).length == 3 ? this.placeLive(index) : false;
    }
    show() {
        let ground = this.ground.map(cell => cell.isAlive ? '*' : '');
        let v1 = new Array(ground.length/10).fill().map(x => ground.splice(0,10))
        console.log(v1);
    }
    start(i) {
        this.ground.map((cell, index) => {
            this.reproductionRule(index);
            this.populationRule(index);
        })
        this.show();
        i == 301? '' : this.start(++i);
    }
}

// let game = new Game(10);
// game.randomLives([1, 2, 59, 79, 9, 35, 15, 78, 57, 97, 68, 91, 81,])
module.exports = Game;