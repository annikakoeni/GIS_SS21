/**
 * 1a
 */
function min(..._arraylist: number[]): number {
    let minimum: number = _arraylist[0];
    for (let i: number = 0; i < _arraylist.length; i++) {
        if (_arraylist[i] < minimum) {
            minimum = _arraylist[i];
        }
    }
    return minimum;
}
console.log(min(5, 42, 17, 2018, -10, 60, -10010));

/**
 * 1b
 */
/**function isEven(_num: number): boolean {
    _num = Math.abs(_num);
    if (_num == 0) {
        return true;
    }
    if (_num == 1) {
        return false;
    }
    return isEven(_num - 2);
}
console.log(isEven(-10));
*/

function isEven(_input: number): boolean {
    if (_input == 0) return true;
    if (_input == 1) return false;
    let result: boolean = isEven(_input - 2);
    return result;
}

console.log(isEven(50));
console.log(isEven(75));
/** Math.abs benutzt den Betrag einer Zahl, so können auch negative Zahlen getestet werden */
/**
 * 1c
 */
//interface Studenten {
//    name: string; alter: number; matrikelnummer: number;

//}
class Studenten {
    name: string;
    alter: number;
    matrikelnummer: number;

    constructor(_name: string, _alter: number, _matrikelnummer: number) {
        this.name = _name;
        this.alter = _alter;
        this.matrikelnummer = _matrikelnummer;


    }

    /**
     * showInfo
     */
    public showInfo(student: Studenten): void {
        console.log(student.name);
        console.log(student.matrikelnummer);
        console.log(student.alter);
    }

}

let student1: Studenten = new Studenten("Walter White", 52, 56789);
let student2: Studenten = new Studenten("Jesse Pinkman", 28, 29809);
let student3: Studenten = new Studenten("Holly White", 18, 83409);

//function studentenErschaffen(_name: string, _alter: number, _matrikelnummer: number): Studenten {
//    let student: Studenten = { name: _name, alter: _alter, matrikelnummer: _matrikelnummer };
//    return student;
//}

let arrayStudent: Studenten[] = [];
arrayStudent.push(student1);
arrayStudent.push(student2);
arrayStudent.push(student3);
arrayStudent.push(new Studenten("Karla Kolumna", 35, 34593));

for (let _student of arrayStudent) {
    _student.showInfo(_student);

}

/** 
console.log(student1.name);
console.log(student2.matrikelnummer);
console.log(student3.alter);
console.log(arrayStudent[3].name);

function showInfo(student: Studenten): void {
    console.log(student.name);
    console.log(student.matrikelnummer);
    console.log(student.alter);
}
showInfo(student1);
showInfo(student2);
showInfo(student3);
showInfo(arrayStudent[3]);
*/
/**
 * 2a
 */
let array: number[] = [5, 42, 17, 2018, -10, 60, -10010];
function backwards(_arraylist: number[]): number[] {
    let arraylocal: number[] = new Array;
    for (let i: number = _arraylist.length - 1; i > 0; i--) {
        arraylocal.push(_arraylist[i]);

    }
    return arraylocal;
}
console.log(backwards(array));

/**
 * 2b
 */
console.log(join(array, [15, 9001, -440]));
array = split(array, 0, 4);
console.log(array);
console.log(split(array, 1, 2));

function join(_arr1: number[], _arr2: number[]): number[] {
    let joinedArray: number[] = [];
    for (let index: number = 0; index < _arr1.length; index++) {
        joinedArray.push(_arr1[index]);

    }
    for (let index: number = 0; index < _arr2.length; index++) {
        joinedArray.push(_arr2[index]);

    }

    return joinedArray;
}
/**
 * 2c
 */
function split(_arr: number[], _index1: number, _index2: number): number[] {
    let aufteilen: number[] = [];
    for (let i: number = _index1; i <= _index2; i++) {
        aufteilen.push(_arr[i]);

    }
    return aufteilen;
}

/**
 * 3a
 */
let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myFirstCanvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");
context.lineWidth = 10;

//Himmel & Boden
context.fillStyle = "#9AE5E6";
context.fillRect(0, 0, 500, 350);
context.fillStyle = "#81A094";
context.fill();
context.fillRect(0, 350, 500, 40);

//Haus
context.fillStyle = "#32161F";
context.fillRect(290, 240, 160, 110);
context.fillStyle = "#000000";
context.fillRect(370, 290, 45, 60);
context.fillStyle = "#9AE5E6";
context.fillRect(310, 260, 40, 45);
let pathTriangle: Path2D = new Path2D();
pathTriangle.moveTo(290, 240);
pathTriangle.lineTo(375, 140);
pathTriangle.lineTo(450, 240);
pathTriangle.lineTo(290, 240);
pathTriangle.closePath();
context.fillStyle = "#775B59";
context.fill(pathTriangle);
context.stroke(pathTriangle);

//Baum
context.fillStyle = "#775B59";
context.fillRect(120, 270, 30, 80);
let pathTree: Path2D = new Path2D();
pathTree.arc(135, 250, 50, 0, 2 * Math.PI);
context.fillStyle = "#2A4D14";
context.fill(pathTree);
context.strokeStyle = "#2A4D14";
context.stroke(pathTree);

//Wolke 1
let pathCloud: Path2D = new Path2D();
pathCloud.arc(70, 120, 40, 0, 2 * Math.PI);
context.lineWidth = 3;
context.fillStyle = "#E6E8E6";
context.fill(pathCloud);
context.strokeStyle = "#C0D6DF";
context.stroke(pathCloud);

//Wolke 2
let pathCloud2: Path2D = new Path2D();
pathCloud2.arc(270, 40, 40, 0, 2 * Math.PI);
context.fill(pathCloud2);
context.stroke(pathCloud2);

//Wolke 3
let pathCloud3: Path2D = new Path2D();
pathCloud3.arc(180, 140, 30, 0, 2 * Math.PI);
context.fill(pathCloud3);
context.stroke(pathCloud3);

//Wolke 4
let pathCloud4: Path2D = new Path2D();
pathCloud4.arc(420, 80, 30, 0, 2 * Math.PI);
context.fill(pathCloud4);
context.stroke(pathCloud4);

let canvas2: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("mySecondCanvas");
let context2: CanvasRenderingContext2D = canvas2.getContext("2d");

interface Rechteck {
    xkoordinate: number;
    y: number;
    breit: number;
    höhe: number;
}

function createRechteck2(): Rechteck {
    let kasten: Rechteck = { xkoordinate: Math.floor(Math.random() * 501), y: Math.floor(Math.random() * 501), breit: Math.floor(Math.random() * 501), höhe: Math.floor(Math.random() * 501) };
    return kasten;
}
function drawRechteck2(_kasten: Rechteck): void {
    context2.fillRect(_kasten.xkoordinate, _kasten.y, _kasten.breit, _kasten.höhe);
}

let rechteckArray2: Rechteck[] = [];
for (let i: number = 0; i < 5; i++) {
    rechteckArray2.push(createRechteck2());
    drawRechteck2(rechteckArray2[i]);
}