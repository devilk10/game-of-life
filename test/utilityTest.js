const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const neighbour = require('../src/utility.js');

describe('utility', () => {
    describe('neighbours', () => {
        it('should return neighbour cells', () => {
            const list = Array(36).fill(0)
            expect(neighbour(list, 3, 6)).to.have.length(8);
        })
    })
})