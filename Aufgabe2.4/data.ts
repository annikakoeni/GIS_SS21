namespace Aufgabe2_4 {
    export interface Einzelteil {
        beschreibung: string;
        bild: string;
    }
    export interface Food {
        boden: Einzelteil[];
        belag: Einzelteil[];
        topping: Einzelteil[];

    }
    /**export let boden: Einzelteil[] = [{ beschreibung: "pizzaboden", bild: "bilder/pizza.jpg" }, { beschreibung: "pidevegetarisch", bild: "bilder/pidespinat.jpg" }, { beschreibung: "pidehackfleisch", bild: "bilder/pide.jpg" }];
    export let belag: Einzelteil[] = [{ beschreibung: "pilz", bild: "bilder/pilz.jpg" }, { beschreibung: "schinken", bild: "bilder/schinken.png" }, { beschreibung: "salami", bild: "bilder/salmai.jpg" }];
    export let topping: Einzelteil[] = [{ beschreibung: "parmesan", bild: "bilder/parmesan.jpg" }, { beschreibung: "rucola", bild: "bilder/rucola.jpg" }, { beschreibung: "tomate", bild: "bilder/tomate.jpg" }];

    let myFood: Food = {
        boden: boden,
        belag: belag,
        topping: topping

    };
    
    console.log(JSON.stringify(myFood));*/
    export let foodTeile: string =
        `{
            "boden": [
                {
                    "beschreibung": "pizzaboden",
                    "bild": "bilder/pizza.jpg"
                },
                {
                    "beschreibung": "pidevegetarisch",
                    "bild": "bilder/pidespinat.jpg"
                },
                {
                    "beschreibung": "pidehackfleisch",
                    "bild": "bilder/pide.jpg"
                }
            ],
            "belag": [
                {
                    "beschreibung": "pilz",
                    "bild": "bilder/pilz.jpg"
                },
                {
                    "beschreibung": "schinken",
                    "bild": "bilder/schinken.png"
                },
                {
                    "beschreibung": "salami",
                    "bild": "bilder/salami.jpg"
                }
            ],
            "topping": [
                {
                    "beschreibung": "parmesan",
                    "bild": "bilder/parmesan.jpg"
                },
                {
                    "beschreibung": "rucola",
                    "bild": "bilder/rucola.jpg"
                },
                {
                    "beschreibung": "tomate",
                    "bild": "bilder/tomate.jpg"
                }
            ]
        }`;
}