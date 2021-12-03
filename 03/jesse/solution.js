const fs = require("fs");
const inputArr = fs.readFileSync("./03/jesse/data.txt", "utf-8").split("\n");

module.exports.gamma = function(arr = inputArr){
	let count = arr[0].split('').map(x => 0);
	for(const num of arr){
		let x = num.split('').map(Number);
		for(let i=0; i<x.length; i++){
			count[i] += (x[i] === 1) ? 1 : -1;
		}
	}
	return parseInt(count.map(x => x>0 ? 1: 0).join(''),2);
}

module.exports.epsilon = function(arr = inputArr){
	let count = arr[0].split('').map(x => 0);
	for(const num of arr){
		let x = num.split('').map(Number);
		for(let i=0; i<x.length; i++){
			count[i] += (x[i] === 1) ? -1 : 1;
		}
	}
	return parseInt(count.map(x => x>0 ? 1: 0).join(''),2);
}

module.exports.oxygen = function(arr = inputArr){
	let remaining = arr;
	for(let i=0;i<arr[0].length;i++){
		if(remaining.length>1){
			let crit = mostCommon(remaining,i)
			remaining = remaining.filter(x => checkValueAtPosition(x,i) === crit)
		}
	}
	return parseInt(remaining[0],2);
}

module.exports.co2 = function(arr = inputArr){
	let remaining = arr;
	for(let i=0;i<arr[0].length;i++){
		if(remaining.length>1){
			let crit = leastCommon(remaining,i)
			remaining = remaining.filter(x => checkValueAtPosition(x,i) === crit)
		}
	}
	return parseInt(remaining[0],2);
}

function checkValueAtPosition(num,i){
	let x = num.split('').map(Number);
	return x[i];
}

function leastCommon(arr, i){
	let ans = 0;
	for(const num of arr){
		let x = num.split('').map(Number);
		ans += (x[i] === 1) ? -1 : 1;
	}
	return ans>0 ? 1: 0;
}

function mostCommon(arr, i){
	let ans = 1;
	for(const num of arr){
		let x = num.split('').map(Number);
		ans += (x[i] === 1) ? 1 : -1;
	}
	return ans>0 ? 1: 0;
}

const data = ['00100','11110','10110','10111','10101','01111','00111','11100','10000','11001','00010','01010'];
// const data2 = ['0','1']
// console.log(mostCommon(data,2))
//console.log(this.gamma() * this.epsilon())
console.log(this.oxygen(data))
console.log(this.co2(data))

console.log(this.co2() * this.oxygen())