function random(x,y,z){
    let num = Math.floor(Math.random()*3);
    if(num == 0){
        return x;
    }
    else if(num == 1){
        return y;
    }
    else{
        return z;
    }
}


console.log("Generated Name is "+random("Crazy ","Amazing ","Fire ")+random("Engine ","Food ","Germany ")+random("Bros ","Limited ","Hub "))