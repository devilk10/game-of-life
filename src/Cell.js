class Cell {
    constructor(isAlive) {
        this.isAlive = isAlive;
    }
    alive() {
        return this.isAlive = true;
    }
    die() {
        return this.isAlive = false;
    }
};
// module.exports = Cell;
