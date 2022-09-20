function checkPalindrome(string) {
    //learn how to comment your code
    //find length of the string
    let len = string.length;

    //loop through half of the string
    for(let i = 0; i< len/2; i++) {
        
        //check if the first and last string are similar
        if (string[i] !== string[len -1 - i]) {
            return 'it is not a palindrome';
            } else {
            return 'it is a palindrome';
            }
    }
};

// const string = prompt('Enter a string');
// console.log(checkPalindrome(string));

console.log(checkPalindrome('civic'));