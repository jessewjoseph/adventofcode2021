// Don't judge me for my hackiness please :) 

const fs = require('fs')

let arr = fs.readFileSync("02/k_data.txt", "utf8").split('\n').map(e => e.split(' '))

let newArr = [];
function transform(arr) {
    for (let i = 0; i < arr.length; i++) {
       newArr.push([arr[i][0], parseInt(arr[i][1])]) 
    }
    return newArr;
}
transform(arr)

function partThree(arr) {
    
  let depth = 0;
  let horizontal = 0;

  for (let i = 0; i < arr.length; i++) {
      let direction = arr[i][0];
      let position = arr[i][1];
      
      if (direction === 'forward') {
        horizontal += position
      }
      if (direction === 'down') {
        depth += position   
      }
      if (direction === 'up') {
         depth -= position 
      }
  }
  return depth * horizontal;
}

function partFour(arr) {

    let depth = 0;
    let horizontal = 0;
    let aim = 0;

    for (let i = 0; i < arr.length; i++) {
        let direction = arr[i][0];
        let position = arr[i][1];

        if (direction === 'forward') {
            horizontal += position
            depth += aim * position
        }
        if (direction === 'down') {
            aim += position
        }
        if (direction === 'up') {
            aim -= position
        }
    }
    return depth * horizontal;
}

console.log(partThree(newArr))
console.log(partFour(newArr));