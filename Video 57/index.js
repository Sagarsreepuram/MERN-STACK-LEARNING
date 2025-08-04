let a = 1;

for(let i=0; i<10; i++){
    console.log(a+i);
}


let obj = {
    name:"sagar",
    role:"Developer",
    company:"NeuAlto"
}

for (const key in obj) {
    let Element = obj[key]
    console.log(key, Element)
}

for (const key in obj) {
    console.log(key)
}
let i =0;
while (i<=10) {
    console.log(i)
    i++;
}


let z = 0;
do {
    console.log(z);
    z++;
} while (z<10);