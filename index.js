// Write your code here!
const element = document.getElementById("main");
element.remove()

const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");

newHeader.textContent = "Weston is the champion";