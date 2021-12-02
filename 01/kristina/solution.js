const fs = require('fs')

let arr = fs.readFileSync("01/k_data.txt", "utf8").split('\n').map(e => parseInt(e));

function depthIncrease(arr) {
    let count = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] < arr[i]) {
            count++
        }
    }
    return count;
}

function slidingWindow(arr) {
    let sumArr = [];

    for (let i = 2; i < arr.length; i++) {
        temp = arr[i - 2] + arr[i - 1] + arr[i];
        sumArr.push(temp)
    }
    return depthIncrease(sumArr);
}


console.log(depthIncrease(arr))
console.log(slidingWindow(arr))

