// * split()
// damit können wir ein String zu einem Array umwandeln
let text = "hallo wie geht es euch?"
let splitMitLeerZeichen = text.split(" ")
// split(" ") mit leerzeichen kann man jedes einzelne Wort ein einem Array speichern
console.log(splitMitLeerZeichen);

let splitOhneLeerZeichen = text.split("")
// split("") ohne leerzeichen kann man jedes einzelne Zeichen einer Zeichenkette ein einem Array speichern
console.log(splitOhneLeerZeichen);



// * filter()
// 0                 1           2
const games = ["World of Warcraft", "Diablo II", "Starcraft"]
console.log(games);
//                             Callback function ist immer eine Arrow function
const gameFilter = games.filter((game, index) => {
    // console.log("game =>", game);
    // console.log(index);
    return game === "Diablo II"
    // console.log(game === "Diablo II");
})

console.log("gameFilter", gameFilter);


console.log("%c forEach", "color: red");

// * forEach()
const series = ["GOT", "Sex and the City", "Power"]
const serieForEach = series.forEach((serie) => {
    console.log(serie);
})

console.log("serieForEach", serieForEach);


// const gamesDiv = document.querySelector("#gamesDiv")
// const gamesLogos = ["https://source.unsplash.com/random/900×700/?game", "https://source.unsplash.com/random/900×800/?game", "https://source.unsplash.com/random/900×790/?game"]

// console.log(gamesLogos);

// gamesLogos.forEach((logo, index) => {
//     console.log(logo);
//     gamesDiv.innerHTML += `<img width="400px" src=${logo} alt=${index} />`
// })







const tiere = ["Katze", "Hund", "Löwe"]

console.log(tiere);

let emojiTiere = tiere.map((tier) => {
    // console.log(tier);
    switch (tier) {
        case "Katze":
            return "🐱"
        case "Hund":
            return "🐶"
        case "Löwe":
            return "🦁"
        default:
            console.log("Kein Tiere wurde gefunden");
    }
})

console.log(emojiTiere);


// * Mit splice()

// bsp 1 => Elemente entfernen => wenn wir nur mit zwei parametern arbeiten
// der erste parameter ist für index, von wo soll das beginnen
// der zweite parameter => bis wohin

const fruits = ["apfel","banane", "orange", "mango"]
console.log(fruits);
fruits.splice(1,2) // Banene und orange
console.log(fruits);


// bsp 2 => Elemente hinzufügen => 
let colors =["red", "blue", "green"]
console.log(colors);
colors.splice(1,0, "yellow")// die (1,0, "hinzufügen") die null ist notwendig zum hinzufügen
console.log(colors);

// bsp 3 => elemente ersetzen
//               0      1       2        3
let animals = ["dog", "cat", "rabbit", "mouse"]
console.log(animals);
animals.splice(2,1, "tiger") // die (2,1, "ersetzen") die eins ist notwendig zum ersetzen und gibt die anzal der zu ersetzenden elemente eins
console.log(animals);

// bsp 4 => elemnte entfernen und hinzufügen
let numbers = [1,2,3,4,5]
console.log(numbers);
numbers.splice(2,2, 6, 7)
console.log(numbers);




//* ================================ForLOOP==================================


// * aufbau vom For loop
// for(statement1; statement2; statement3){
  //  codeeee

// }for (start/end; condition; after/before){
  //  codee
// }

// for(let i=0; i<10;i++){
//     console.log(i);
// }


for(let i=10; i>0; i--){
    console.log(i);
}

// * Achtung vor Infinty LOOP

for(let i=1; i>=3; i++) {
    for(let j =10; j <= 10; j++){
        console.log(j);
    }
}


// * ForLoop mit Array

let country = ["germany", "england", "italy", "spain"]

for(let i =0; i < country.length; i++){
    console.log(i);
    console.log(country[i].toLocaleUpperCase());
}


// "for of " schleife funktioniert mit array und mit strings

let farben = ["grün", "rot", "blau","gelb"]

for(let farbe of farben){
    console.log(farbe);
}

const someText = "blablabla hi was geht"
for(let zeichen of someText){
    console.log(zeichen);
}

// * ====== es gibt verschiedene loops=======

// # WHILE

let doNumber = 0;
do {
    console.log("doNumber",doNumber);
    doNumber ++
} while(doNumber <= 10)


// for -loop
let superArray = [10, 20, 30]
for(let i = 0; i < superArray.length; i++){
    console.log(i);
    console.log(superArray[i] *2);
}

for(let i of superArray){
    console.log(i*2);
}

const multiMap = superArray.map((num) => {
    return num *2
})
