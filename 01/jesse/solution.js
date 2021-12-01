const fs = require("fs");
const inputArr = fs.readFileSync("01/data.txt", "utf-8").split("\n").map(x => parseInt(x));

let count = 0;

for(let i=1; i<inputArr.length; i++){
	if(inputArr[i] > inputArr[i-1]) count++
}

console.log(count)