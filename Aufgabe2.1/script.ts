function a1(): void {
    let x: string = "Alles";
    console.log(x);
    func2();
    console.log(x);
    func1();
    console.log(x);
    console.log("Logo!");


}
/**
 * 1a) buchstaben sind zuläassig
 * buchstaben und zahlen sind zulässig
 * symbole $ und _ sind zulässig
 *      Zahlen sind nicht zulässig
 *      zahlen und buchstaben sind nicht zulässig (reihenfolge)
 */

a1();
function func2(): void {
    console.log("Gute!");
}

function func1(): void {
    console.log("Klar?");
}
/**
 * 1b) starte in Zeile 3 (Alles), geh dann in Zeile 4, dort ist func1, springe deswegen dann in zeile 17 (Klar), dann zeile 18 die schließt
 * programm läuft in zeile 5 weiter und gibt logo aus, dann zeile 6 wird geschlossen und ist fertig
 */

function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}

a2();
/**
 * Startet mit 9, 1 wird abgezogen von i, wird mit neuem Wert überschrieben, solange bis i zu klein wird, n dem fall wenn i = 0 wäre
 * zählt von 9 bis 1 herunter
 */
/**
 * 3) gibt konkrete fehlermeldungen und schlägt verbesserungen vor, fehler werden unterstrichen
 */

/*let x: string = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);
 
function func1(y: string): void{
     y = "Bla";
     console.log(y);
 }
 
function func2(): void{
     let x: string = "Blubb";
     console.log(x);
 }
 
function func3(): void{
     x = "Test";
 }
/**
 * 4a) Hallo Bla Hallo Blubb Test wird ausgegeben
 * 4b) globale Variablen: Variablen sind von überall aus zugreifbar
 *      Lokale: Variablen innerhalb einer Funktion, sind nur dort verfügbar
 *      Übergabeparameter: Werte die einer Funktion mitgegeben werden (String etc) und dort kopiert werden
 *      Funktionen sind Codeblöcke und Variablen und Zahlen haben Werte in sich, haben benennungen
 * 
 */
let number1: number = 2;
let number2: number = 5;

function multiply(x: number, y: number): number {
    return x * y;

}
console.log(multiply(number1, number2));


/**
 *  5a
 */

function max(x: number, y: number): number {
    if (x > y) {
        return x;
    }
    else {
        return y;
    }
}
console.log(max(number1, number2));

/**
 * 5b
 */

function zsmzzählen(): void {
    let i: number = 100;
    let zählen: number = 0;
    while (i > 0) {
        zählen += i;
        i--;
    }
    console.log(zählen);

}
zsmzzählen();
/**
 * 5c
 */
function zufällig(): void {
    for (let i: number = 0; i < 10; i++) {
        console.log(Math.floor(Math.random() * 101));
    }
    /**
     * math.floor: ganze zahlen
     * math.random: zufällige zahlen aber z.B o,1
     */
}
zufällig();
/**
 * 5d
 */

function factorial(fac: number): number {
    let factor: number = 1;
    let result: number = 1;

    do {
        result = result * factor;
        factor++;
    } while (factor < fac + 1);
    return result;
}
console.log(factorial(number1));

/**
 * 5e
 */
let year1: number = 1900;
let year2: number = 2021;

function leapyears(start: number, end: number): void {
    for (let i: number = start; i <= end; i++) {
        if (i % 100 != 0 && i % 4 == 0 || i % 400 == 0) {
            console.log(i);
        }
    }
}
leapyears(year1, year2);

/**
 * 5f
 */

let hashtags: string = "";

for (let i: number = 0; i < 7; i++) {
    hashtags = hashtags + "#";
    console.log(hashtags);
}
/**
 * 6a
 */

for (let i: number = 0; i < 101; i++) {
    if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
/**
 * 6b
 */


for (let i: number = 0; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {

        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

/**
 * 6c
 */

let blackfiled: string = "#";
let whitefield: string = " ";
let chessboard: string = "";

for (let i: number = 0; i < 8; i++) {
    if (i % 2 == 0) {
        for (let i: number = 0; i < 4; i++) {
            chessboard += whitefield;
            chessboard += blackfiled;
        }
        chessboard += "\n";
    }

    else {
        for (let i: number = 0; i < 4; i++) {
            chessboard += blackfiled;
            chessboard += whitefield;
        }
        chessboard += "\n";

    }
}
console.log(chessboard);

/**
 * 6d
 */
let lastfield: string = "";
function drawboard(boardlength: number): void {
    for (let i: number = 0; i < boardlength; i++) {
        for (let i: number = 0; i < boardlength; i++) {
            if (lastfield == whitefield) {
                chessboard += blackfiled;
                lastfield = blackfiled;
            }
            else {
                chessboard += whitefield;
                lastfield = whitefield;
            }

        }
        chessboard += "\n";
    }
    console.log(chessboard);
}
drawboard(50);
/**
 * 6e
 */