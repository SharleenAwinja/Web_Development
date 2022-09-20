// form events - change, focus, blur, submit

//change form event
let username = document.getElementById('username');

// username.addEventListener('change', function() {
//     console.log('Value Chnaged');
// })

username.addEventListener('input', function() {
    // console.log(event.target);//this prints on the console the element which triggered the event
    //console.log(event.target.value); //this prints to the console the value that is inputed;the value of the element which triggered the event
    let currentValue = event.target.value;
    currentValue = currentValue.toUpperCase();
    console.log(currentValue);
    username.value = currentValue //using the property name of value to pass the currentvalue to the username
})

// focus form event - triggered when element is focused on
let password = document.getElementById('password');

password.addEventListener('focus', function() {
    password.style.backgroundColor = 'pink';
})

//blur event - triggered when element loses focus
function newColour() {
    password.style.backgroundColor = 'white';
}

password.onblur = newColour;

// submit event is triggered when the submit button is clicked by the user
//the submit button is triggered when the form is filled and the name-value pairs are added to the url

//this didn't work why?
let logInForm = document.getElementById('log-in');
logInForm.addEventListener('submit', function(e) {
    alert('submit button clicked');
    e.preventDefault();  //this is supposed to prevent the username and password from appearing in the url
})