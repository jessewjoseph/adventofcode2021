const {part2} = require('./solution');
const { expect } = require("chai");

describe("Part 2", function() {

    it("example answer", function() {
		const arr = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]
        expect(part2(arr)).to.equal(5);
    });
});