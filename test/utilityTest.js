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
            const list = Array(36).fill(new Cell(false));
            expect(neighbour(list, 9, 6)).to.have.length(8);
        })
    })
})