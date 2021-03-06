import * as Http from "http";

export namespace P_3_1Server {
    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;
        /**
         * falls port nicht gleich 8100-> setze port auf 8100
         */

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    /**
     * server initialisieren und listener hinzufügen
     */

    function handleListen(): void {
        console.log("Listening");
    }
    /**
     * führt listener aus (Konsoloenausgabe listening)
     */


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugriffsrechte
        _response.write(_request.url);
        _response.end();
    }
    //** führt anfrage aus, gibt ausgaben aus, setzt html werte fest */
}
