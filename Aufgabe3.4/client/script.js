"use strict";
var P_3_4;
(function (P_3_4) {
    let displayResponse = document.getElementById("answer");
    async function sendData() {
        let formData = new FormData(document.forms[0]);
        let _url = "https://akgis.herokuapp.com";
        _url += "/sendData";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
    }
    async function getData() {
        let formData = new FormData(document.forms[0]);
        let _url = "https://akgis.herokuapp.com";
        _url += "/getData";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let answer = await fetch(_url);
        let output = await answer.text();
        displayResponse.innerHTML = output;
    }
    document.getElementById("sendbutton").addEventListener("click", sendData);
    document.getElementById("getbutton").addEventListener("click", getData);
})(P_3_4 || (P_3_4 = {}));
//# sourceMappingURL=script.js.map