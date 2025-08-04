let a = 5;
let factResult = 1;  

function fact(a, factResult) {
  for (let i = 1; i <= a; i++) {
    factResult = factResult * i;
  }
  return factResult;
}

let ans = fact(a, factResult);
console.log(ans); 



// let a = 5;
// let fact = 1

// for(let i=1; i<=a; i++){
//     fact=fact*i;

// }
// console.log(fact)