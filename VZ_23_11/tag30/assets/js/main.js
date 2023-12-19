console.log("Hello World");


// - slice
// - erstellt einen neuen Array der eine Kopie des uhrsprünglichen arrays darstellt

let fruits = ["Banane","Apfel", "Orange", "Mango"]
let obstsalat = fruits.slice(1,3)
console.log("fruits", fruits);
console.log("obstsalat",obstsalat);

fruits.sort()
console.log(fruits);

// - sort()
// - Sortiert die Elemente eines Arrays und gibt das sortierte Array zurück

let numbers = [23, 1, 5, 67, 9]
numbers.sort(function(a,b){
    return a-b
})
console.log(numbers);

// - splice()
// - Ändert den Inhalt des Arrays -> entfernt oder ersetzt bestehende Elememente und /oder fügt neue Elemnte hinzu


let myHero = ["Deadpool", "Ironman", "Batman", "Arragorn"]
myHero.splice(2, 0, "Boromir")
console.log("splice", myHero);

// - benötigen wir um einen parameter

// - reverse()
// - kehrt die Rheinfolge der elemte eines Arrays um
// - das erste Elemnt wird das letzte und das letzte das erste
let number2 = [4,8,10,5,1]
number2.reverse()
console.log("reverse", number2);



// ! =======MAP()===========

let myNumArr = [1,2,3,4,5]
console.log(myNumArr);

let multi = myNumArr.map(num => num * num)
console.log("map:", multi);

// ! =======FOREACH()===========

let tiere = ["Hund", "Katze", "Maus"]
// - führt eine Funktion einmal für jedes elemt in einem Array< aus
tiere.forEach((pet, index) => {
    // * Bei jedem Durchlauf, bezieht sich "pet" auf ein anderes elment des Arrays
    // * den Index benötigen wir nur, wenn wir uns deisen ausgeben lassen wollen
    console.log(index + ":" + pet);
})

// Beim ersten durchlauf der schleife ist "pet" gleich "Hund" und index gleich 0
// Beim zweiten durchlauf der schleife ist "pet" gleich "Katze" und index gleich 1
// Beim dritten durchlauf der schleife ist "pet" gleich "Maus" und index gleich 2


let num = [1,2,3]

//el=elemnt / i =index / arr = array
num.forEach((el, i, arr) =>{
    console.log("index", i);
    console.log("gesamtes Array:", arr);
    console.log("Element", el);
})


// ! =======MAP() & FOREACH()===========

let num2 = [1,2,3,4,5]

const mapForEach = (num2) =>{
    let doubble = num2.map(num => num * 2)
    console.log(doubble);

    doubble.forEach(duobbleNum =>{
        console.log("verdoppelte Nummer: " + duobbleNum);
    })
}

mapForEach(num2)


let num3 = [1,2,3,4,5]

const evenOdd = (pizza) => {
    let doubble = pizza.map(num => num * 2);
// geht über das verdoppelte Array und prüft welche Zahl gerade / ungerade ist
    doubble.forEach(duoblleNum =>{
        console.log("verdoppelte Nummer" +duoblleNum);
        if ( duoblleNum % 2 == 0){
            console.log("numer ist gerade");
        } else {"Nummer ist ungerade"}
    })


}

evenOdd(num3)






