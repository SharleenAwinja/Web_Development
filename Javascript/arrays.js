// SPREAD OPERATOR AND REST OPERATOR
// spread operator allows allows expressions to be expanded in places where multiple elements, arguments or variables are expected

// use cases of spread operator
// add the elements of an existing array into a new array
let certToAdd = ['Algorithms and Data Structures', 'Front end libraries'];
let certifications = ['Responsive web design', ...certToAdd, 'Data Visualization', 'APIs and Microservices', 'Quality Assurance and Information Security'];
let withoutSpread = ['Responsive web design', certToAdd, 'Data Visualization', 'APIs and Microservices', 'Quality Assurance and Information Security'];
console.log(certifications);
console.log(withoutSpread);

// pass elements of an array as arguments to a function
// when your function is expecting single arguments but you are dealing with a bunch or pack like an array, you use the spread operator to turn the array elemnts into individual elements
function addThreeNumbers(x, y, z) {
    console.log(x+y+z);
}
let args = [0, 1, 2];
addThreeNumbers(...args);
let moreArgs = [0, 1, 2, 3, 4, 5];
addThreeNumbers(...moreArgs);

// copy arrays
let arr = [1, 2, 3];
let arr2 = [...arr];
console.log(arr2)
arr2.push(4);
console.log(arr2);
console.log(arr);

// concatenate arrays
let arr1 = [0, 1, 2];
let arr3 = [3, 4, 5]
console.log(arr1.concat(arr3));
let arr5 = [...arr1, ...arr3];
console.log(arr5);
let arr4 = [...arr3, ...arr1];
console.log(arr4);
// you can concatenate and add more elements
let arr6 = [...arr3,'Practising some more', ...arr1];
console.log(arr6);

// REST OPERATOT
// it condenses multiple elements into an array
// it collects multiple elements and condenses them into a single array element
// since it is an array you can use array methods
function multiply(multiplier, ...theArgs)  { 
    console.log(theArgs); // when you see the three dots in the function definition it means various arguments are being passed to the function and those arguments are being condensed into an array
    return theArgs.map(function(element) {
        return multiplier * element;
    });
}
let finalArr = multiply(2, 1, 2, 3);
console.log(finalArr);

// difference between rest operator and spread operator depends on the challenge that we are facing and based on the challenge it automatically chenges to either a spread operator or a rest operator
// spread operator takes array elements and tries to separate them and pass them as individual values. rest operator takes individual values and bunches them up together as an array
function sumTwo(...args) {
    console.log(args);
    let sum = 0;
    for(const arg of args) {
        sum += arg;
    }
    return sum;
}
console.log(sumTwo(2, 3, 1, 5, 7));

function sumThree(a, b, ...args) {
    console.log(args);
    let multi = a * b;
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return [sum, multi];
}
console.log(sumThree(2, 3, 1, 5, 7));

// btw
let returnedValue = Math.max(1, 2, 4, 7, 8, 9);
console.log(returnedValue);

let myObj = {};
Object.assign(myObj, {a:1, b:2, c:3}, {d:4, e:5, f:6});
console.log(myObj);

// arrays are a special type of object which store lists of data
const myArray = ['cat', 'apple', 7, 10.9, 'mountain']
console.log(typeof(myArray)); //arrays are of type object
console.log(myArray[0]); //arrays use position to acces data, regular objects use keys to access data
// update list
myArray[0] = 'lion';
console.log(myArray);
myArray[5] = 'valley';
console.log(myArray);
myArray[8] = 'padlock'
console.log(myArray);
myArray[myArray.length] = 'Rob';
console.log(myArray); //ensuring that you add elements to the end of the array and have no empty array
// better way is to use the push in-built function which adds an element to the end of the array
myArray.push('heaven');
console.log(myArray);
// you can delete value using pop which removes the last value and returns it to us
console.log(myArray.pop());
console.log(myArray);