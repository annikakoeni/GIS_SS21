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
    export interface Art {
        artSorte: string;
        picture: string;

    }
    export interface Belag {
        belagSorte: string;
        picture: string;

    }
    export interface TopBelag {
        topSorte: string;
        picture: string;

    }
    export interface Essen {
        art: Art;
        belag: Belag;
        top: TopBelag;

    }
    export let art: Art[] = [{ artSorte: "Pizza", picture: "bilder/pizza.jpg" }, { artSorte: "Pide vegetarisch", picture: "bilder/pidespinat.jpg" }, { artSorte: "Pide mit Hackfleisch", picture: "bilder/pide.jpg" }];
    export let belag: Belag[] = [{ belagSorte: "Pilze", picture: "bilder/pilz.jpg" }, { belagSorte: "Schinken", picture: "bilder/schinken.jpg" }, { belagSorte: "Salami", picture: "bilder/salami.jpg" }];
    export let top: TopBelag[] = [{ topSorte: "Rucola", picture: "bilder/rucola.jpg" }, { topSorte: "Parmesan", picture: "bilder/parmesan.jpg" }, { topSorte: "Kirschtomaten", picture: "tomate/pide.jpg" }];

}