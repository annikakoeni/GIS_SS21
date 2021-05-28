"use strict";
var Aufgabe2_5;
(function (Aufgabe2_5) {
    function erstelleEinzelteile(_einzelteil) {
        let div = document.createElement("div");
        div.style.margin = "30px";
        div.style.maxWidth = "400px";
        let bilddiv = document.createElement("img");
        bilddiv.src = _einzelteil.bild;
        bilddiv.style.maxWidth = "100%";
        div.appendChild(bilddiv);
        let button = document.createElement("Button");
        let textButton = document.createTextNode(_einzelteil.beschreibung);
        button.appendChild(textButton);
        button.addEventListener("click", datenSpeichern);
        button.dataset.bildspeichern = _einzelteil.bild;
        div.appendChild(button);
        return div;
    } /**
     *
     * if part nochmal für unterseiten
     */
    function datenSpeichern(_click) {
        let click = _click.target;
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
    function bilderAnzeigen(_einzelteil) {
        if (document.querySelector("title").getAttribute("id") == "Startseite") {
            for (let i = 0; i < _einzelteil.boden.length; i++) {
                let foodElement = erstelleEinzelteile(_einzelteil.boden[i]);
                document.body.appendChild(foodElement);
            }
        }
        if (document.querySelector("title").getAttribute("id") == "Belagseite") {
            for (let i = 0; i < _einzelteil.belag.length; i++) {
                let foodElement = erstelleEinzelteile(_einzelteil.belag[i]);
                document.body.appendChild(foodElement);
            }
        }
        if (document.querySelector("title").getAttribute("id") == "Toppingseite") {
            for (let i = 0; i < _einzelteil.topping.length; i++) {
                let foodElement = erstelleEinzelteile(_einzelteil.topping[i]);
                document.body.appendChild(foodElement);
            }
        }
    }
    let divgewaehlteE = document.createElement("div");
    divgewaehlteE.style.maxWidth = "900px";
    divgewaehlteE.style.maxHeight = "400px";
    document.body.appendChild(divgewaehlteE);
    let textgewaehlteE = document.createElement("p");
    let textgewaehlteEtext = document.createTextNode("Hier siehst du deine Auswahl");
    textgewaehlteE.appendChild(textgewaehlteEtext);
    divgewaehlteE.appendChild(textgewaehlteE);
    if (document.querySelector("title").getAttribute("id") == "Toppingseite" || document.querySelector("title").getAttribute("id") == "Belagseite" || document.querySelector("title").getAttribute("id") == "Startseite") {
        /**
         * boden
         */
        let bildboden = document.createElement("img");
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
        let bildbelag = document.createElement("img");
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
        let bildtopping = document.createElement("img");
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
        let bildboden = document.createElement("img");
        bildboden.src = localStorage.getItem("boden");
        bildboden.style.maxWidth = "300px";
        bildboden.style.maxHeight = "300px";
        divgewaehlteE.appendChild(bildboden);
        /**
     * belag
     */
        let bildbelag = document.createElement("img");
        bildbelag.src = localStorage.getItem("belag");
        bildbelag.style.maxWidth = "300px";
        bildbelag.style.maxHeight = "300px";
        divgewaehlteE.appendChild(bildbelag);
        /**
    * topping
    */
        let bildtopping = document.createElement("img");
        bildtopping.src = localStorage.getItem("topping");
        bildtopping.style.maxWidth = "300px";
        bildtopping.style.maxHeight = "300px";
        divgewaehlteE.appendChild(bildtopping);
    }
    async function getData(_url) {
        let response = await fetch(_url);
        console.log("Response: ", response);
        let data = await response.json();
        bilderAnzeigen(data);
    }
    getData("./data.json");
    if (document.querySelector("title").getAttribute("id") == "Ergebnisseite") {
        async function sendData(_url) {
            let query = new URLSearchParams(localStorage);
            _url = _url + "?" + query.toString();
            let answer = await fetch(_url);
            let output = await answer.json();
            let displayResponse = document.getElementById("Serverantwort");
            if (output.error != null) {
                displayResponse.className = "error";
                displayResponse.innerText = output.error;
                console.log("Fehler bekommen");
            }
            if (output.message != null) {
                displayResponse.className = "message";
                displayResponse.innerText = output.message;
                console.log("Nachricht bekommen");
            }
        }
        sendData("https://gis-communication.herokuapp.com");
    }
})(Aufgabe2_5 || (Aufgabe2_5 = {}));
//# sourceMappingURL=script.js.map