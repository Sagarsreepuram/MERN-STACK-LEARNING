function nice(name) {
    console.log("Hi "+name+" How are you?");
    console.log("Hi "+name+" where are you working?");
    console.log("Hi "+name+" Where are you from?");
    console.log("Hi "+name+" How many yr's of experience you have?");
}

nice("Sagar");


// This is called optional parameters to use
function sum(a, b, c =10){
// function sum(a, b){
    // console.log(a+b);
    return a + b + c;
}
// sum(8 ,8);

res1 = sum(7, 7);
res2 = sum(8, 8);
res3 = sum(10, 10);

console.log("The sum of 2 number is :"+res1)
console.log("The sum of 2 number is :"+res2)
console.log("The sum of 2 number is :"+res3)




// Arrow function
const fun1 = (x) => {
    console.log("I am an arrow function", x)
}


fun1(6);
fun1(52)