namespace Aufgabe2_4 {
    let foodTeileObjekt: Food = JSON.parse(foodTeile);
    function erstelleEinzelteile(_einzelteil: Einzelteil): HTMLElement {
        let div: HTMLDivElement = document.createElement("div");
        div.style.margin = "30px";
        div.style.maxWidth = "400px";
        let bilddiv: HTMLImageElement = document.createElement("img");
        bilddiv.src = _einzelteil.bild;
        bilddiv.style.maxWidth = "100%";
        div.appendChild(bilddiv);
        let button: HTMLElement = document.createElement("Button");
        let textButton: Text = document.createTextNode(_einzelteil.beschreibung);
        button.appendChild(textButton);
        button.addEventListener("click", datenSpeichern);
        button.dataset.bildspeichern = _einzelteil.bild;
        div.appendChild(button);
        return div;

    }/**
     * 
     * if part nochmal für unterseiten
     */
    function datenSpeichern(_click: MouseEvent): void {
        let click: HTMLElement = <HTMLElement>_click.target;
        if (document.querySelector("title").getAttribute("id") == "Startseite") {
            localStorage.setItem("boden", click.dataset.bildspeichern);
        }
        if (document.querySelector("title").getAttribute("id") == "Belagseite") {
            localStorage.setItem("belag", click.dataset.bildspeichern);
        }
        if (document.querySelector("title").getAttribute("id") == "Toppingseite") {
            localStorage.setItem("topping", click.dataset.bildspeichern);
        }
    }
    if (document.querySelector("title").getAttribute("id") == "Startseite") {

        for (let i: number = 0; i < foodTeileObjekt.boden.length; i++) {
            let foodElement: HTMLElement = erstelleEinzelteile(foodTeileObjekt.boden[i]);
            document.body.appendChild(foodElement);
        }
    }
    if (document.querySelector("title").getAttribute("id") == "Belagseite") {


        for (let i: number = 0; i < foodTeileObjekt.belag.length; i++) {
            let foodElement: HTMLElement = erstelleEinzelteile(foodTeileObjekt.belag[i]);
            document.body.appendChild(foodElement);
        }
    }
    if (document.querySelector("title").getAttribute("id") == "Toppingseite") {
        for (let i: number = 0; i < foodTeileObjekt.topping.length; i++) {
            let foodElement: HTMLElement = erstelleEinzelteile(foodTeileObjekt.topping[i]);
            document.body.appendChild(foodElement);
        }
    }
    let divgewaehlteE: HTMLDivElement = document.createElement("div");
    divgewaehlteE.style.maxWidth = "900px";
    divgewaehlteE.style.maxHeight = "400px";
    document.body.appendChild(divgewaehlteE);
    let textgewaehlteE: HTMLElement = document.createElement("p");
    let textgewaehlteEtext: Text = document.createTextNode("Hier siehst du deine Auswahl");
    textgewaehlteE.appendChild(textgewaehlteEtext);
    divgewaehlteE.appendChild(textgewaehlteE);


    if (document.querySelector("title").getAttribute("id") == "Toppingseite" || document.querySelector("title").getAttribute("id") == "Belagseite" || document.querySelector("title").getAttribute("id") == "Startseite") {
        /**
         * boden
         */
        let bildboden: HTMLImageElement = document.createElement("img");
        if (localStorage.getItem("boden") == "") {
            bildboden.src = "bilder/fragezeichen.jpg";
        }
        else {
            bildboden.src = localStorage.getItem("boden");
        }
        bildboden.style.maxWidth = "300px";
        bildboden.style.maxHeight = "300px";
        divgewaehlteE.appendChild(bildboden);


        /**
     * belag
     */

        let bildbelag: HTMLImageElement = document.createElement("img");
        if (localStorage.getItem("belag") != localStorage.getItem("belag")) {
            bildbelag.src = "bilder/fragezeichen.jpg";
        }
        else {
            bildbelag.src = localStorage.getItem("belag");
        }
        bildbelag.style.maxWidth = "300px";
        bildbelag.style.maxHeight = "300px";
        divgewaehlteE.appendChild(bildbelag);



        /**
    * topping
    */

        let bildtopping: HTMLImageElement = document.createElement("img");
        if (localStorage.getItem("topping") == "") {
            bildtopping.src = "bilder/fragezeichen.jpg";
        }
        else {
            bildtopping.src = localStorage.getItem("topping");
        }
        bildtopping.style.maxWidth = "300px";
        bildtopping.style.maxHeight = "300px";
        divgewaehlteE.appendChild(bildtopping);




    }
    if (document.querySelector("title").getAttribute("id") == "Ergebnisseite") {
        /**
         * boden
         */
        let bildboden: HTMLImageElement = document.createElement("img");
        bildboden.src = localStorage.getItem("boden");
        bildboden.style.maxWidth = "300px";
        bildboden.style.maxHeight = "300px";
        divgewaehlteE.appendChild(bildboden);


        /**
     * belag
     */

        let bildbelag: HTMLImageElement = document.createElement("img");
        bildbelag.src = localStorage.getItem("belag");
        bildbelag.style.maxWidth = "300px";
        bildbelag.style.maxHeight = "300px";
        divgewaehlteE.appendChild(bildbelag);



        /**
    * topping
    */

        let bildtopping: HTMLImageElement = document.createElement("img");
        bildtopping.src = localStorage.getItem("topping");
        bildtopping.style.maxWidth = "300px";
        bildtopping.style.maxHeight = "300px";
        divgewaehlteE.appendChild(bildtopping);

    }

}




