console.log("👋 🌎");
const root = document.getElementById("root");
console.log(root);
function handleClick (e) {
    console.dir(e)
}
const newButton = document.createElement("button");
root.appendChild(newButton);
newButton.innerText = 'X';
newButton.classList.add("square");

newButton.setAttribute("onclick", "handleClick(this)")


