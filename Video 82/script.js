async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45);
    }, 1000);
  });
}

function sum(a, b, c) {
  return a + b + c;
}

(async function main() {
  // let a = await sleep();
  // let b = await sleep();
  // console.log(a, b); // Output: 45 45

  // let [x, y] = [1, 5 ,7]
  // console.log(x, y)

  // let [x, y, ...rest] = [1, 5, 7, 10, 20, 2]
  // console.log(x, y, rest)

  let obj = {
    a: 1,
    b: 2,
    b: 3,
  };

  let { a, b } = obj;
  console.log(a, b);

  let arr = [1, 2, 4];
  console.log(sum(arr[0] , arr[1],  arr[2]))
  console.log(sum(...arr)) 

})();
