let arr = [2,4,5,6,7,8];

// let newarr = [];
// for(let i=0; i<arr.length; i++){
//     const Element = arr[i];
//     newarr.push(Element ** 2);
// }

// Instead of doing like above we use map 

// let newarr = arr.map((e, index, arr) =>{
//     return e**2
// })

// console.log(newarr);

// const greaterThanseven = (e)=>{
//     if(e>7){
//         return true
//     }
//     return false
// }

// console.log(arr.filter(greaterThanseven))


let arr2 = [1,2,3,4,6,7]

const red = (a,b) =>{
    return a+b
}

console.log(arr2.reduce(red))


let a = Array.from("Sagar");
console.log(a)