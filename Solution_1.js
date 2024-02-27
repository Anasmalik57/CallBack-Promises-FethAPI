/* 1. Write a function that takes in an array of integers and a callback function, and returns a new array where each element is doubled using the callback */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function MakeitDouble(arr, callback) {
    return arr.map(callback);
};

let doubledArray = MakeitDouble(arr, (num) => num * 2);
console.log(doubledArray);
