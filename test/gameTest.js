const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const Game = require('../src/game.js');

describe('Game', () => {
    describe('start', () => {
        it('should generate ground', () => {
            expect(new Game(10).ground).to.have.lengthOf(100);
        });

        it('placeLive', () => {
            const game = new Game(10);
            game.placeLive(12);
            assert.isTrue(game.isAlive(12));
        });
        it('should return neighbour cells', () => {
            const game = new Game(10);
            assert.isArray(game.getNeighbours(20))
        })
    })
});

