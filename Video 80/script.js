// let obj = {
//     a:1,
//     b:"Harry"
// }

// console.log(obj)

// let animal = {
//     eats:true
// };

// let rabbit = {
//     jumps:true
// };

// rabbit.__proto__ = animal;


class animal{
    constructor(name){
        this.n = name;
        console.log("Object is Created......")
    }
     
    eats(){
        console.log("I am Eating")
    }

    jumps(){
        console.log("I am Jumping")
    }

}
class Lion extends animal{
  constructor(name){
    super(name)
    console.log("Object is created and he is lion")
   }
    // method overloading
    eats(){
        console.log("I am Eating only veg")
    }
}

// a.eats();
let a = new animal("sagar");
a.eats()


let b = new Lion("surya");
b.eats()
