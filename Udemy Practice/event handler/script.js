let button = document.getElementById('new-button');
// console.log(button);

// function colourchange() {
//     button.style.backgroundColor = 'green';
//     alert('you just changed the colour');
// }

// the bove method is used when the onclick event is specified in the html tag
// the method below is used when the onclick event is not defined in the html tag
// button.onclick = function colourchange() { 'you can use an anoynymous function here'
//     button.style.backgroundColor = 'green';
    // alert('you just changed the colour');
// }

// this is method one which is reacting to an event using event handler properties
//button.onclick = colourchange; //when you use parenthesis it calls the function automatically without the user clicking. parenthesis will make the function to run when the script is executed rather than when the user clicks the button
// i've noticed that when you have an alert bo, it has to be closed first before the rest of the code can be executed. in this case you have to close the alert first before the colour changes

// this is method two which is reacting to an event using addEventListener method
//addEventListener('click', colourchange); remember no parenthesis

// you can also use an anoynymous function
// addEventListener('click', function () {
//     button.style.backgroundColor = 'green';
//     alert('you just changed the colour');
// }
// );

// how to change color randomly
// addEventListener('click', function () {
//     value1 = (Math.floor(Math.random() * 256));
//     value2 = (Math.floor(Math.random() * 256));
//     value3 = (Math.floor(Math.random() * 256));
//     button.style.backgroundColor = `rgb(${value1}, ${value2}, ${value3})`; // longer version 'rgb(" + value1 + "," + value2 + "," + value3)'
//     alert(Math.floor(Math.random() * 256));  //math.random returns a random number between 0 and 1 where 1 is not included. the number is always less than one hence we'll be multiplying by 256
//     // math.floor rounds off the number to the nearest integer
// }
// )


let text = document.getElementById('text');
console.log(text);
console.log(text.classList);

setTimeout(() => {
    text.classList.add('big');
}, 2000);

button.onclick = function() {
    text.classList.remove('big');
}

let menu = document.querySelector('.list'); //when selecting using query selector you pass the class or id as it is written in css with a perios or a hash
let toggleButton = document.getElementById('bars');

toggleButton.addEventListener('click', function() {
    // contains is used to check if the element contains a particular class
    if(menu.classList.contains('show')) {
        menu.classList.remove('show')
    } else {
        menu.classList.add('show');
    }
});

// claslist property is only supported by modern browsers. it is not vailable in internet explorer 9 and below
