const fs = require("fs");
const inputArr = fs.readFileSync("./01/jesse/data.txt", "utf-8").split("\n").map(x => parseInt(x));

module.exports.part1 = function(arr = inputArr){

	let count = 0;

	for(let i=1; i<inputArr.length; i++){
		if(inputArr[i] > inputArr[i-1]) count++
	}

	return count;
}

module.exports.part2 = function(arr = inputArr){

	let count = 0;

	for(let i=3; i<arr.length; i++){
		if(arr[i] > arr[i-3]) count++
	}

	return count;
}

console.log(this.part1())
console.log(this.part2())