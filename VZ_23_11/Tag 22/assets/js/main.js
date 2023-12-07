
console.log("%c good Morning",  "background: white; color:red");


// ! neue Themen



// # Comparison -Vergleichen

// - ==vergleicht die Werte
// - ===vergleicht die werte von Datentypen

console.log(3 == "3");
console.log(3 === "3");

console.log(1 == 1);
console.log(1 == 2);
console.log(6 == "7");

// - != nicht gleicher Wert
// - != nicht gleicher Wert und Datentypen

console.log(3 != 3);
console.log(3 !== 3);
console.log(3 !== "3");

// - > größer als
// - < kleiner als
// - >= größer gleich
// - <= kleiner gleich

console.log(3 > 2);
console.log(4 < 2);

console.log("A" > "B");
console.log("B" > "a");


// # Elemente selektieren


// - getElmentById

// über ID ansprechen

const main_headline = document.getElementById("main_headline")
console.log(main_headline);
console.log(main_headline.innerHTML);

// - querySelector()

// über ID ansprechen

const secondray_headline = document.querySelector("#secondary_headline")
console.log(secondray_headline);
console.log(secondray_headline.innerHTML);

// über Class ansprechen

const secondray_headline2 = document.querySelector(".myHeadline")
console.log(secondray_headline2);
console.log(secondray_headline2.innerHTML);


// direkt element ansprechen

const secondray_headline3 = document.querySelector("h2")

console.log(secondray_headline3);
console.log(secondray_headline3.innerHTML);


// - innerHTML

main_headline.innerHTML = "ich bin der neue, hahaha"

secondray_headline3.innerHTML = "Moin"  // ein = überschreibt headline
secondray_headline3.innerHTML += " leute" // ein += fügt hinzu ("moin leute")


// - css befehle über JS

main_headline.style.color = "red"
main_headline.style.border = "1px solid red"
main_headline.style.backgroundColor = "yellow"


// * Unterschied zwischen document.write und inner.HTML


let divContainer = document.querySelector("#div_container")

divContainer.innerHTML = "<p>ich bin ein p tag</p>"

divContainer.innerHTML += "<p> ich bin nochmal ein p Tag</p>"


document.write("<p> ich bin p tag von document.write() <p/>")


// # Funktion

// function (ist das keyword) syaHello (ist der name der funktion)

function sayHello(){
    console.log("Hello Leute");

}

sayHello()

function log(firstName, lastName){
    console.log(`du bist eingeloggt ${firstName} ${lastName}`);
}
log("Magda", "Cale")


function addMe(num1, num2){
    console.log(num1 * num2);
}
addMe(3, 5)

let num5 = 5
let num6 = 10

function plusMe (myNummber1, myNummber2){
    const newNummber = myNummber1 + myNummber2
divContainer.innerHTML += "<p>" + newNummber + "<p/>"
}
plusMe(num5, num6)










