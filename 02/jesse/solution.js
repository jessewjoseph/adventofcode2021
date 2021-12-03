const fs = require("fs");
const inputArr = fs.readFileSync("./02/jesse/data.txt", "utf-8").split("\n");

module.exports.calculatePosition = function(arr = inputArr){
	let position = 0;
	let depth = 0;
	for(const command of arr){
		let [direction, value] = command.split(' ');
		value = parseInt(value);
		switch(direction){
			case 'forward':
				position += value;
				break;
			case 'down':
				depth += value;
				break;
			case 'up':
				depth -= value;
				break;
		}
	}
	return (position * depth);
}

module.exports.calculatePositionWithAim = function(arr = inputArr){
	let position = 0;
	let depth = 0;
	let aim = 0;
	for(const command of arr){
		let [direction, value] = command.split(' ');
		value = parseInt(value);
		switch(direction){
			case 'forward':
				position += value;
				depth += aim * value;
				break;
			case 'down':
				aim += value;
				break;
			case 'up':
				aim -= value;
				break;
		}
	}
	return (position * depth);
}

console.log(this.calculatePositionWithAim())