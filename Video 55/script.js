console.log("Hey this is the tutorial of js");

var a = 210;
var b = 200;
// This will work
b = b + 30;
var c = "Hi This is sagar";
console.log(a + b);
console.log(typeof a, typeof b, typeof c);

// this will work
var _c = 25;

// this will not work
// var 22c = 52;

//In most of case we will not use var

// This is constant variable which we cannot change
// const a1 = 20;
// a1 = a1 + 10;

// var is function-scoped, so if you declare it inside a function, it doesn’t leak out.
// let is block-scoped, so it stays within {} if declared inside.

{
  var l = 10;
  let m = 20;
}
console.log(l); // ✅ 10 (var leaked out)
// console.log(m); // ❌ ReferenceError: b is not defined

let x = "sagar";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

// Y the type of null is object is js

let obj = {
  name: "sagar",
  jobcode: 2585,
};

console.log(obj);
// to add a new obj
obj.salary = "500cr";
console.log(obj);
// to change that obj
obj.salary = "800cr";
console.log(obj);

// we can also boolean values
obj.isHandsome = true;
console.log(obj);
