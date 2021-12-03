const {gamma,epsilon} = require('./solution');
const { expect } = require("chai");

const data = ['00100','11110','10110','10111','10101','01111','00111','11100','10000','11001','00010','01010'];

describe("Day 2", function() {

    it("example answer", function() {
        expect(gamma(data)).to.equal(22);
        expect(epsilon(data)).to.equal(9);
    });
});