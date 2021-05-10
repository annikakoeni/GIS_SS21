/**
 * Aufgabe 1
 */

/**
 * Buttons with Eventlistener
 */
let addRecButton: HTMLElement = document.createElement("Button");
let textRecButton: Text = document.createTextNode("Rectangler");
addRecButton.appendChild(textRecButton);
document.body.appendChild(addRecButton);
addRecButton.id = "RecButtId";

let resetWindowButton: HTMLElement = document.createElement("Button");
let textWinButton: Text = document.createTextNode("Resetter");
resetWindowButton.id = "resetButtId";

resetWindowButton.appendChild(textWinButton);
document.body.appendChild(resetWindowButton);

document.getElementById("RecButtId").addEventListener("click", createDivRec);
document.getElementById("resetButtId").addEventListener("click", resetWindow);

/**
* Functions for Window resetting and creating Rectangle Divs
*/
function resetWindow(): void {
    window.location.reload();
}

function createDivRec(): void {

    let colors: String[] = ["blue", "red", "brown", "yellow", "green", "purple", "pink", "turquoise"];
    let previousElement: HTMLElement = document.body;

    let div: HTMLDivElement = document.createElement("div");
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
/**
 * Aufgabe2
 */
namespace Aufgabe2_3 {

}