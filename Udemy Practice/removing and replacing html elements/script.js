let list = document.getElementById('list');
let addInput = document.getElementById('new-item');
let addBtn = document.getElementById('add');
let updateBtn = document.getElementById('update');
let removeBtn = document.getElementById('remove');


let currentInputValue = '';
addInput.addEventListener('input', function(e) {
        currentInputValue = e.target.value;
});

function createNewNode() {
    let newListElement = document.createElement('li');
    let textNode = document.createTextNode(currentInputValue);
    newListElement.appendChild(textNode);
    newListElement.classList.add('items');

    return newListElement;
}

function addListItem() {
  if (currentInputValue !== undefined && currentInputValue !== null && currentInputValue !== '') {
    let newListElement = createNewNode();
    list.appendChild(newListElement);
    addInput.value = ''; //this is how to selectattributes in js; element.propertyname
    currentInputValue = '';
    } else {
      alert('Enter a value');
      }
    }

addBtn.addEventListener('click', addListItem);

// //enter key
addInput.addEventListener('keyup', function(e) { //an event gives us access to the event object 
    if(e.keyCode === 13) { //checking the keycode property of the keyup event since an event gives us an object
        addListItem();
    }
});

updateBtn.addEventListener('click', function() {
    let firstElement = list.firstElementChild; //this gives us access to the first element child
     let newListElement = createNewNode();
     list.replaceChild(newListElement, firstElement); //replace child takes two arguemnts. 1st is the element to replace with and 2nd is the element being replaced
});

removeBtn.addEventListener('click', function() {
    let firstElement = list.firstElementChild;
    list.removeChild(firstElement);
});

// add delete icons and remove a specific item when the delete icon is clicked
// when a new item is created add the delete icon to the new element

console.log('height is ' + window.innerHeight);
console.log('width is ', window.innerWidth);

