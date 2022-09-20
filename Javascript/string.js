const a = 'Hello';
const b = 'World';
const c = 'Good Morning!' + a + b;
const d = `Good morning! ${a} ${b}`;
console.log(c);
console.log(d);
console.log(a.concat(b));
console.log(a.concat(" ", b));
console.log(d.trim());

e = '   trim';
console.log(e);
console.log(e.trim());
f = 'Inauguration day';
console.log(f.length);
console.log(f);
console.log(f.trim());

g = "   mystring    ";
console.log(g);
console.log(g.trim());
console.log(g.trimStart());
console.log(g.trimEnd());
console.log(g.length);

// Undefined - variable has been declared but has not been initialized ie has not been assigned a value. 
//Null - a value assigned to a variable maybe to represent that the variable holds no value. 
let myVar;
console.log(myVar); //myVar holds no value
myVar = null;
console.log(myVar);//myVar holds the value null

let testNum = 10;
console.log(++testNum); //pre-increment - value is incremented first before being used
console.log(testNum++); //post-increment - value is used first before being incremented
console.log(testNum--); //post-decrement - value is used first before being decremented
console.log(testNum);
console.log(--testNum); //pre-decrement - value is decremented first before being used
console.clear();
// Type coercion
console.clear();

var testString = 'hello';
var newNum = 5;
console.log(testString + newNum);
console.log(typeof(testString + newNum)); // implicit type coercion
console.log('hola' + true);
console.log(typeof('hola' + true));
console.log(50 + 'hola');
console.log(typeof(50 + "hola"));
console.log('2');
console.log(typeof('2'));
console.log(+'2');
console.log(typeof(+"2")); //implicit conversion to an integer

// when you use operators before a string it converts the string to a number
console.log(-"2"); //only works with plus and minus
console.log(-'apple'); //returns not a number since it tries to convert apple to a number

console.log(2 >= '2'); //the string 2 will be converted to a number before the comparison is done
console.log(2 == '2'); // type coercion is done with loose equality operator
console.log(2 ==='2'); //no type coercion with strict equality operator

if (5) //anything that isn't a zero or null or undefined or an empty string is converted to true, eg the boolean true or a string 
{ 
    console.log('true');
} else {
    console.log('false');
}

// explicit type conversion
// use in-built string function to convert a value to string data type
let moreNum = 6;
console.log(moreNum);
console.log(typeof(moreNum));
console.log(String(moreNum));
console.log(typeof(String(moreNum)));
console.log(typeof(null));
console.log(typeof(String(null)));
console.log(typeof(undefined));
console.log(typeof(String(undefined)));

// use in-built number function to convert a value to number data type
let moreString = '7';
console.log(moreString);
console.log(typeof(moreString))
console.log(Number(moreString));
console.log(typeof(Number(moreString)));
console.log(Number(null));
console.log(typeof(Number(null)));
console.log(Number(undefined));
console.log(typeof(Number(undefined)));
console.log(Number(true));
console.log(typeof(Number(true)));
console.log(Number(false));
console.log(typeof(Number(false)));
console.log(Number('-90.24'), typeof(Number('-90.24')));
console.log(Number('-90.24'), 'is a', typeof(Number('-90.24')));

// use in-built boolean function to convert to a boolean
console.log(1, Boolean(1), typeof(Boolean(1)));
console.log(0, Boolean(0), typeof(Boolean(0)));
console.log(5, Boolean(5), typeof(Boolean(5)));
console.log(null, Boolean(null), typeof(Boolean(null)));
console.log(undefined, Boolean(undefined), typeof(Boolean(undefined)));
console.log('string', Boolean('string'), typeof(Boolean('string')));
console.log('empty string', Boolean(''), typeof(Boolean('')));
