namespace P_3_4 {
    let displayResponse: HTMLParagraphElement = <HTMLDivElement>document.getElementById("answer");
    async function sendData(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
       
        let _url: RequestInfo = "https://akgis.herokuapp.com";
        _url += "/sendData";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();

    }
    async function getData(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
     
        let _url: RequestInfo = "https://akgis.herokuapp.com";
        _url += "/getData";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
        let answer: Response = await fetch(_url);
        let output: string = await answer.text();
        displayResponse.innerHTML = output;


    }

    document.getElementById("sendbutton").addEventListener("click", sendData);
    document.getElementById("getbutton").addEventListener("click", getData);
}