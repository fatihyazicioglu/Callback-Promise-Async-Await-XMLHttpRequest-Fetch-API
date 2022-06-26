document.getElementById("btn").addEventListener("click", 
function () {
    alert("Hallo!")
    setTimeout(() => {
        console.log("clicked")
    }, 4000);
    ;
})
function showText(){
    console.log("message");
}

showText()

console.log("hi");
setTimeout(() => {
    console.log("3 second");
}, 3000);

console.log("2");