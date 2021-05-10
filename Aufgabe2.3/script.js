"use strict";
/**
 * Aufgabe 1
 */
/**
 * Buttons with Eventlistener
 */
let addRecButton = document.createElement("Button");
let textRecButton = document.createTextNode("Rectangler");
addRecButton.appendChild(textRecButton);
document.body.appendChild(addRecButton);
addRecButton.id = "RecButtId";
let resetWindowButton = document.createElement("Button");
let textWinButton = document.createTextNode("Resetter");
resetWindowButton.id = "resetButtId";
resetWindowButton.appendChild(textWinButton);
document.body.appendChild(resetWindowButton);
document.getElementById("RecButtId").addEventListener("click", createDivRec);
document.getElementById("resetButtId").addEventListener("click", resetWindow);
/**
* Functions for Window resetting and creating Rectangle Divs
*/
function resetWindow() {
    window.location.reload();
}
function createDivRec() {
    let colors = ["blue", "red", "brown", "yellow", "green", "purple", "pink", "turquoise"];
    let previousElement = document.body;
    let div = document.createElement("div");
    div.style.height = (50 + Math.floor(Math.random() * 451)).toString() + "px";
    div.style.width = (50 + Math.floor(Math.random() * 451)).toString() + "px";
    div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)].toString();
    div.style.position = "absolute";
    div.style.left = (50 + Math.floor(Math.random() * 451)).toString() + "px";
    div.style.right = (50 + Math.floor(Math.random() * 451)).toString() + "px";
    div.classList.add("rectangle");
    previousElement.appendChild(div);
    previousElement = div;
}
//# sourceMappingURL=script.js.map