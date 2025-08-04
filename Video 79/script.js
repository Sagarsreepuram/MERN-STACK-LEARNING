let a = prompt("Enter the First Number");

let b = prompt("Enter the Second Number");

if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Sry enter the Numbers");
}

let sum = parseInt(a) + parseInt(b);

// let x = 5;
// try{
//     console.log("The Total is ",sum*x);
// }catch(error){
//       console.log("There is some Error")
// }
// finally{
//     console.log("files are being closed ")
// }

function main() {
    let x = 15;
  try {
    console.log("The Total is ", sum * x);
    return true;
  } catch (error) {
    console.log("There is some Error");
    return false;
  } finally {
    console.log("files are being closed ");
  }
}


let c = main();
console.log(c);




