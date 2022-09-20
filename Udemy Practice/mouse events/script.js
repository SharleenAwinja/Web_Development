let btn = document.getElementById('click');

btn.addEventListener('mousedown', function() {
    console.log('mousedown event');
});

btn.addEventListener('mouseup', function() {
    console.log('mouse up event');
});

btn.addEventListener('click', function() {
    console.log('click event');
});

btn.addEventListener('dblclick', function() {
    console.log('double click event');
});

let firstNumber = document.getElementById('first-number');
let overBox = document.getElementById('over');
// let firstNumber = document.querySelector('#over > p#first-number') //selects the first paragraph of id first number
// let firstNumber = document.querySelector('#over > p') //selects the first paragraph
// let firstNumber = document.querySelector('#over > p.text') //selects the first paragraph of class text
//console.log(firstNumber);


// mouseover is triggered when pointer enters HTML element or its children
overBox.addEventListener('mouseover', function() {
    let count = firstNumber.innerHTML;
    count++;
    firstNumber.innerHTML = count;
});

// mouseenter is triggered when mouse pointer enters HTML element
//let secondNumber = document.getElementById('second-number');
let enterBox = document.getElementById('enter');
let secondNumber = document.querySelector('#enter > p#second-number');
console.log(secondNumber);

function newCount() {
    let count = secondNumber.innerHTML;
    count++;
    secondNumber.innerHTML = count;
};

enterBox.onmouseenter = newCount;

//mousemove event
let moveBox = document.getElementById('move');
let thirdNumber = document.querySelector('#move > p#third-number');

moveBox.addEventListener('mousemove', function() {
    let count = thirdNumber.innerHTML;
    count++;
    thirdNumber.innerHTML = count;
});
