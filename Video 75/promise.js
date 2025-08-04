console.log("Promise")

let prom1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("Yes I am done")
        resolve("Harry")
    }, 3000);
})


prom1.then((a)=>{
    console.log(a)
})
