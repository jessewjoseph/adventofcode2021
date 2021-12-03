const {calculatePosition,calculatePositionWithAim} = require('./solution');
const { expect } = require("chai");

describe("Day 2", function() {

    it("example answer", function() {
		const arr = ["forward 5", "down 5", "forward 8", "up 3", "down 8", "forward 2"]
        expect(calculatePosition(arr)).to.equal(150);
    });

    it("example answer part 2", function() {
		const arr = ["forward 5", "down 5", "forward 8", "up 3", "down 8", "forward 2"]
        expect(calculatePositionWithAim(arr)).to.equal(900);
    });
});