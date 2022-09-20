// keydown event
document.body.addEventListener('keydown', function(e) {
    let key = e.keyCode; //this gives us a number that represents a key on the keyoard
    if (key === 16) //keycode info website shows keys and their values
        console.log('Keydown for enter ' + key);
    console.log(key); //console logs a key was clicked whenever any key is clicked
    })

//the event listener passes the evnt object to event handler and the object has certain properties. 
// when the event is a keyboard event, the object has a property called keycode
// keycode represents which keyboard key was clicked


// keyup event
document.body.addEventListener('keyup', function(e) {
    let key = e.keyCode; 
    if (key === 16) 
        console.log('Keyup for enter key ' + key);
})

// keypress event
document.body.addEventListener('keypress', function(e) {
    let key = e.keyCode; 
    if (key === 13) 
        console.log('key pressed for ' + key);
    if (key === 16) //16 is shift key
        console.log('key pressed for ' + key);
})

// keyboard events can be used eg to hide a pop up or anvigation bar when escape button is clicked
