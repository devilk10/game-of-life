const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const Game = require('../src/Game.js');

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
        });
    })

    describe('Rules', () => {
        it('should return true if population', () => {
            let game = new Game(4);
            game.placeLive(2);
            assert.isFalse(game.populationRule(5));
        })

        it('should return cell alive if 2 live cells are around', () => {
            let game = new Game(4);
            game.randomLives([5,9,10,11]);
            assert.isTrue(game.isAlive(10));
        })

        it('should return cell as dead if more than 3 live cells are around', () => {
            let game = new Game(5);
            game.randomLives([12,14,18,19]);
            game.populationRule(13);
            assert.isFalse(game.isAlive(13));
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

    describe('nextGeneration', ()=> {
        it('should return cell 0 as dead because of underpopulation',()=>{
            let game = new Game(3);
            game.randomLives([0,1,2,5]);
            game.populationRule(0);
            assert.isFalse(game.isAlive(0));
        })
        it('should return cell 1 as dead because of overpopulation',()=>{
            let game = new Game(3);
            game.randomLives([0,1,2,4,5]);
            game.populationRule(1);
            assert.isFalse(game.isAlive(1));
        })
    })

    describe('game', () => {
        it('should not update game state if block state is passed', () => {
            let game = new Game(3);
            game.randomLives([1,5,3,7]);
            game.getGround();
            game.getGround();
            let copyGame = new Game(3);
            copyGame.randomLives([1,5,3,7]);
            assert.deepEqual(game.getGround(),copyGame.getGround());
        })
    })
});

