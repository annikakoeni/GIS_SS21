"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
var P_3_1Server;
(function (P_3_1Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    /**
     * falls port nicht gleich 8100-> setze port auf 8100
     */
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    /**
     * server initialisieren und listener hinzufügen
     */
    function handleListen() {
        console.log("Listening");
    }
    /**
     * führt listener aus (Konsoloenausgabe listening)
     */
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugriffsrechte
        _response.write(_request.url);
        _response.end();
    }
    //** führt anfrage aus, gibt ausgaben aus, setzt html werte fest */
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=serverscript.js.map