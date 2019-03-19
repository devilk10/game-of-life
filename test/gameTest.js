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
            assert.isFalse(game.isAlive(11));
        });
        it('should return neighbour cells', () => {
            const game = new Game(10);
            expect(game.getNeighbours(54)).to.have.lengthOf(8);
        })
    })

    describe('Rules', () => {
        it('should return true if underpopulation', () => {
            let game = new Game(4);
            game.placeLive(2);
            assert.isTrue(game.populationRule(5));
        })

        it('should return false if many cells are around', () => {
            let game = new Game(4);
            game.placeLive(5);
            game.placeLive(6);
            game.placeLive(9);
            assert.isFalse(game.populationRule(10));
        })

        it('should return true if more than 3 cells are around', () => {
            let game = new Game(4);
            game.placeLive(5);
            game.placeLive(6);
            game.placeLive(11);
            game.placeLive(9);
            assert.isTrue(game.populationRule(10));
        })

        it('should make cell live if surronding 3 cells are live', () => {
            let game = new Game(4);
            game.placeLive(5);
            game.placeLive(9);
            game.placeLive(7);
            game.reproductionRule(6);
            assert.isTrue(game.isAlive(6));
        })
    })
});

