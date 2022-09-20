'use strict'
function total(arr = []) {
    let result = 0;
    for(let i = 0; i < arr.length; i++) {
        if(i % 2 === 0 || i === 0){
            result = result + arr[i];
        }else {
            result = result - arr[i];
        }
    }
    console.log(result);
    return result;
}

total([100, 100]);

let pos = 0;
for (pos = 0; pos < 10; pos++) {
    if(pos % 2 !== 0) continue; //continue key word is used to proceed with the iteartoion without executing a ceratin block of code
    console.log(pos);
}

for (pos = 0; pos < 10; pos++) {
    if(pos % 2 === 0) continue; //continue key word is used to proceed with the iteartoion without executing a ceratin block of code
    console.log(pos);
}

function totalSum(num1, num2, num3 = 40) {
    console.log('num1 = ', num1, 'num2 = ', num2, 'num3 = ', num3);
    return num1 + num2 + num3;
}
console.log(totalSum(10, 20)); //the value assigned to num3 in the function declaration is a default value. it only comes into play when no argument is passed for num3. you can aslo have default values for the other parameters.
//assigning a default value to a parameter makes the parameter an optional parameter
console.log(totalSum(10, 20, 30));
// when you pass more arguments than is required you will not get an error. the function will only be performed on the required number of arguments.
console.log(totalSum(10, 20, 30, 40, 50, 60));
//when you give less values you will get undefined for the arguments that have not been passed. when perfoming an arithmetic operation your result will be not a number
console.log(totalSum(10));

//you can use contolr flow statement to avoid error when an argument is undefined
function newSum(num1, num2, num3) {
    if (num3 === undefined) {
        return num1 + num2;
    }else {
    console.log('num1 = ', num1, 'num2 = ', num2, 'num3 = ', num3);
    return num1 + num2 + num3;
    }
}

console.log(newSum(10, 20, 30));
console.log(newSum(10, 20));

// function and variable hoisting
var total = 5;
var sum = function(num1, num2) {
    console.log(total);
    total = num1 + num2;
    var total;
    console.log(total);
}
sum(2, 4);