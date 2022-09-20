// challenge 1
//function that returns the sum of all multiples of 3 or 5 below the number passed
function solution(number){
  let sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}
console.log(solution(10));

function solution(number){
  return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
}

solution = n => {
  let s = 0;
  for (let i = 0; i < n; i++) s += i % 3 ? i % 5 ? 0 : i : i;
  return s;
}

function solution(number){
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  
  return sum;
}

function solution(number){
  return number < 3 ? 0
   : [...Array(number).keys()]
    .map(int => (int % 3 === 0 || int % 5 === 0) ? int : 0 )
    .reduce((a, b) => a + b )

}

function solution(number){
  for(acc=0; --number > 2;){
    acc = !(number%3) || !(number%5) ? acc + number : acc;
  }
  return acc;
}

