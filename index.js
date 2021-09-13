const main = document.getElementById("main");
main.remove();
const newHeader = document.createElement('h1'); 
document.body.appendChild(newHeader); 
newHeader.id = "victory";
newHeader.innerHTML = "<h1> anthony is the champion!</h1>"