// challenge 1
// console log 'Hello World'

console.log("Hello World!");

//challenge 2
// Function that converts parameter secondInteger to an integer then adds it to declared variable firstInteger. converts secondDecimal to decimal then adds it to declared variable firstDecimal. concatenates firstString with secondString

function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = "HackerRank";
    
    //convert secondInteger to integer then add to firstInteger
    console.log(firstInteger + parseInt(secondInteger));

    //convert secondDecimal to floating point and add it to firstDecimal
    console.log(firstDecimal + parseFloat(secondDecimal));

    //concatenate firstString and secondString
    console.log(firstString + secondString);
}

performOperation('12', '12.0', 'Practice');

//challenge 3