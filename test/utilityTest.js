const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const Cell = require('../src/Cell.js');
const neighbour = require('../src/utility.js');

describe('utility', () => {
    describe('neighbours', () => {
        it('should return 0 neighbour cells', () => {
            const list = Array(36).fill(0)
            expect(neighbour(list, 3, 6)).to.have.length(0);
        })
        it('should return 8 neighbour cells', () => {
            const list = Array(36).fill(new Cell(true));
            expect(neighbour(list, 9, 6)).to.have.length(8);
        })
        it('should return 3 neighbour cells', () => {
            const list = Array(36).fill().map((v, i) => i);
            expect(neighbour(list, 0, 6)).to.have.length(3);
        })
    })
    describe('sideElems', () => {
        it('should return 2 elements', () => {
            const list = [1, 2, 3, 4];
            assert.deepEqual(sideElems(list, 1, 3), [1, 3]);
        })
        it('should return 1 element if index is on the edge', () => {
            const list = [1, 2, 3, 4, 5, 6, 7, 8];
            assert.deepEqual(sideElems(list, 0, 4), [undefined, 2]);
        })
    })
})