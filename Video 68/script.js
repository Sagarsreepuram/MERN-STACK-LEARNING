let boxes = document.getElementsByClassName("box")

console.log(boxes)

boxes[2].style.backgroundColor = "red"

// In the above we did selected ele parent and child like 2nd child of parent 
// what if we another box 2.5 in that place that will be red but i want 2 red ryt so we use getelebyid


document.getElementById("boxred").style.backgroundColor = "red"

document.querySelector(".box").style.backgroundColor = "green"

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "green";
})

console.log(document.getElementsByTagName("div"))


console.log(boxes[4].matches("#boxred"));
console.log(boxes[4].closest(".container"));
console.log(boxes[4].closest("html"));
