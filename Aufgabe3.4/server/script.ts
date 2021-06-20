import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace P_3_4 {

    console.log("Starte Server");
    let port: number = Number(process.env.PORT);        //create Port = "Gateway" to server
    if (!port)
        port = 8100;                                    //set port to 8100 (if it wasn't before) 
    startServer(port);

    function startServer(_port: number | string): void {



        let server: Http.Server = Http.createServer();      //create server
        console.log("Starting Server" + port);
        server.addListener("request", handleRequest);       //Listener for Requests and Listen functions
        server.listen(port);

    }

    let databaseURL: string = "mongodb+srv://user1:<12345>@clustergis.8spcp.mongodb.net/AbgabeEnde?retryWrites=true&w=majority";

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {      //function Request granting access for everyone and giving back the sent message url

        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let path: string = <string>url.pathname;
            let input: Data = { name: url.query.name + " ", email: url.query.email + " ", subject: url.query.subject + " " };
            if (path == "/sendData") {
                let data: string = await sendDatabaseData(databaseURL, input);
                _response.write(data);
            }


            else if (path == "/getData") {
                let data: Data[] = await getDatabaseData(databaseURL);
                _response.write(JSON.stringify(data));
                console.log(data);

            }
        }

        _response.end();

    }
    interface Data {
        name: string;
        email: string;
        subject: string;
    }
    async function getDatabaseData(_url: string): Promise<Data[]> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let orders: Mongo.Collection = mongoClient.db("AbgabeEnde").collection("Datas");
        console.log(" Database connection", orders != undefined);
        let cursor: Mongo.Cursor = orders.find();
        let data: Data[] = await cursor.toArray();
        return data;
    }
    async function sendDatabaseData(_url: string, _formData: Data): Promise<string> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let orders: Mongo.Collection = mongoClient.db("AbgabeEnde").collection("Datas");
        orders.insertOne(_formData);
        let answer: string = "ThisIsTheAnswer";
        return answer;
    }

}








