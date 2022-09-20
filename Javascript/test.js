function solution(number){
  return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
}
const x = [...new Array(4).keys()];
const y = new Array(4).keys();
console.log(y);
console.log(x);

const z = ['a', 'b', 'c'];
const g = [...z];
console.log(g);

const h = [1, 2, 3, 4];
const i = h.filter((n) => n > 2);
console.log(i);

const j = [0, 1, 2, 3, 4, 5, 6];
const k = j.filter((n) => {
    return n % 3 == 0 || n % 5 == 0;
});
console.log(k);

const l = [...j];
const m = l.reduce((p, c) => c + p);
console.log('m', m);

const n = `<ul>
    <li>0</li>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
</ul>
`;
console.log(n);

function orderedList(j) {
    let k = '<ul>';
    for (let i = 0; i < j.length; i++) {
        k += `<li>${i}</li>`;
        //console.log(k);
        
    }
    k += '</ul>';
    return k;
}

console.log(orderedList(j));