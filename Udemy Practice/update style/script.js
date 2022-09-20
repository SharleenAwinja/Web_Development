let count = document.getElementsByClassName('text');
// for(let i = 0; i < count.length; i++) {
//     let number = count[i].innerHTML;
//     console.log(number);
// }
// let number = count.innerHTML;
// console.log(number);
//with document.getElementsById you don't need to use the index to access the inner HTML.

let number = count[0].innerHTML;
let backImg = document.querySelector('.main-div');

// practising adding and removing classes
// you can add to an element a class that already has styling properties
// count[0].classList.add('newClass');
// console.log(count[0]);
// console.log(count[0].classList);
// count[0].classList.remove('newClass');
// console.log(count[0]);
// console.log(count[0].classList);

// let font = count[0].style.fontSize;
// console.log(font);

// setinterval returns and interval ID. we'll store that ID in a variable and then use it to stop the interval from continuing

let interval = setInterval(function(){
    // if(number < 1) {
    //     count[0].innerHTML = 0;
    // } else {
    // number = --number;
    // count[0].innerHTML = number; 
    // }
    
    // changing the inner html
    number < 1 ? number = 0 : number -= 1;
    count[0].innerHTML = number;
    
    // changing the background image
    number % 2 === 0 ? backImg.style.backgroundImage = 'linear-gradient(to bottom right, purple, pink)' : backImg.style.backgroundImage = 'linear-gradient(to bottom right, green, yellow)';
    
    // number > 0 ? text.fontSize; ive been unable to console log font size
    
    // changing font size
    count[0].style.fontSize = number * 100 + 'px';
    console.log(number * 100 + 'px'); //when number is 0 fonst size will be 0 hence the text wont be seen
    
    // changing width of background image
    backImg.style.width = number * 10 + '%';

    // all the styles were added as inline styles. you can see this when you inspect the page. the limitation to this is that you can only update styles that can be added as inline styles eg colour, margin, font size, width, height.
    // you cannot add or update styles for pseudo classes or pseudo elements becuase pseudo classes and pseudo elements cannot be added as inline styles
    // there are work arounds to this; however they are not provided by js [look into the work arounds]
    console.log('Interval Running');

    if(number <= 0) {
    clearInterval(interval); //the clearInterval function accepts the interval ID then uses it to stop the interval. failure to use if will make the interval stop after the first iteration
        }
    },1000);

    // if we were using background image with a source attribute rather than linear gradient
    // let backImg = document.querySelector('.main-div');
    // backImgPath = backImg.src
    // number % 2 === 0 ? backImgPath = 'insert url' : backImgPath = 'Insert url';
    // or 
    // backImgPath = number % 2 === 0 ? 'insert url' : 'insert url';
    // backImg.className = back-image [this would update the class attribute]




