// document.getElementById("red").style.backgroundColor = "red"
// document.getElementById("blue").style.backgroundColor = "blue"
// document.getElementById("green").style.backgroundColor = "green"
// document.getElementById("pink").style.backgroundColor = "pink"
// document.getElementById("black").style.backgroundColor = "black"

// let boxes = document.getElementsByClassName("box");

// for (let i = 0; i < boxes.length; i++) {
//     boxes[i].style.color = "white";
// }


let colors=["red","green","Blue","Brown","black","grey","orange","purple"]
let box = document.querySelectorAll(".box")
let size = colors.length

box.forEach(element => {
    let random=Math.floor(Math.random()*size)
    element.style.color=colors[random]
});
box.forEach(element => {
    let random=Math.floor(Math.random()*size)
    element.style.backgroundColor=colors[random]
});