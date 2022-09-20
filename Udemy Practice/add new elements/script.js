//DOM Tree
// <ul> this is the parent node
//      <li>List item 1</li> li is the element node
//      <li>List item 2</li>  and the inner Html ie list item is the text node
// </ul>

// let newList = document.createElement('li'); //creating a HTml element. you can pass any html tag eg span, p, h3 etc
// console.log(newList);

// let newText = document.createTextNode('List Item 3'); //creates a text that is to be passed to the html element
// newList.appendChild(newText);
// console.log(newList);

// you can also do
// newList.appendChild(document.createTextNode('List Item 3'));
// console.log(newList);

//newList.id = 'item3' //adding an id to the eleemnt

// let list = document.getElementById('list');
// let btnAdd = document.getElementById('add');
//let firstItem = document.getElementById('list-item1');

// btnAdd.addEventListener('click', function() {
//     // let newList = document.createElement('li');
//     // let newText = document.createTextNode(`List item ${list.childElementCount + 1}`); //('list item ' + (list.childElementCount + 1));
//     // newList.appendChild(newText);
//     // newList.classList.add('items');

//     //let newList = document.createElement('li');
//     let newItem = document. getElementById('new-item');
//     let newText = newItem.innerHTML;
//     console.log(newText);

//     // let firstItem = list.firstElementChild;
//     // console.log(firstItem);
//     // newList.id = 'list';
//     //console.log(newList);
//     //list.appendChild(newList); //appendChild adds an elemnt as the last element to the parent node
//     // console.log(list.childElementCount); counts number of child elements of the list div

//     // list.insertBefore(newList, firstItem);
// });

//let digit = document.getElementsByClassName('digit');
// console.log(digit);
// console.log(digit.array);
// for(let i =0; i < digit.legth; i++) {
//     console.log(i);
// }

// digit.array.forEach(element => {
//     console.log(element);
// });

//to append an element before a certain sibling rather than as the last element of the parent element
// use the method insertBefore
// method accepts two parameters
// first is the created element
// second is the sibling element before which you want to insert the new element

//how to enter a value in the text area then add it to the list
// let list = document.getElementById('list');
// let btnAdd = document.getElementById('add');
// let newText = document.getElementById('new-item');

// newText.addEventListener('input', function() {
//     console.log(event.target.value)
// })

// hide list
let toggleButton = document.getElementById("hide");

toggleButton.addEventListener("click", () => {
  let show = document.getElementById("list");
  if (show.style.display === "none") {
    show.style.display = "flex";
    toggleButton.value = "Hide list";
  } else {
    show.style.display = "none";
    toggleButton.value = "Show list";
  }
});

let addBtn = document.getElementById("add");
let addInput = document.getElementById("new-item");

// addBtn.addEventListener("click", () => {
//   let list = document.getElementById("list");
//   let newList = document.createElement("li");
//   newList.innerHTML = addInput.value;
//   addInput.value = ""; //this line returns the placeholder text
//   newList.classList.add("items");
//   list.appendChild(newList);
// });

// document.body.addEventListener('keypress', function(e) {
//   let key = e.keycode;
//   if (key === 13) {
//     let list = document.getElementById("list");
//     let newList = document.createElement("li");
//     newList.innerHTML = addInput.value;
//     newList.classList.add("items");
//     list.appendChild(newList);
//   }
// });

function addList() {
  if (addInput.value === "") {
    alert("enter the list value please");
  } else {
    let list = document.getElementById("list");
    let newList = document.createElement("li"); 
    newList.innerHTML = addInput.value; 
    addInput.value = ""; //this line returns the placeholder text
    newList.classList.add("items");
    list.appendChild(newList);
  }
}

addBtn.addEventListener("click", () => {
  addList();
});

addInput.addEventListener("keyup", (event) => {
  if (event.which === 13) {
    addList();
  }
});

//check code with bibek on youtube

// another method
// let currentInput Value = '';
// addInput.addEventListener('input', function(e) {
      //currentInputValue = e.target.value;
//});

// function addListItem() {
  // if (currentInputValue !== undefined && currentInputValue !== null && currentInputValue !== '') {
    // let newListElement = document.createElement('li);
    // let textNode = document.createTextNode(currentInputValue);
    // newListElement.appendchild(textNode);
    // list.appendChild(newListElement);
    // addinput.value = '';
    // currentInputValue = '';
    // } else {
      // alert('Enter a value');
      // }

// addBtn.addEventListener('click', addListItem());

// another way for enter
// addInput.addEventListener('keyup', function(e)//an event gives us access to the event object {
      // if (e.keycode === 13) { //checking the keycode property of the keyup event since an event gives us an object
              // addListItem();
      // }
// })