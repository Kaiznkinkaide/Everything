// ======Console.log()========
console.log("Hello world!");
// mit console.log()können wir uns texte (strings) ausgeben lassen.

// ======Variable========

// -- const -- wird für Werte verwendet die nicht verändert werden sollen 
// -- let -- Werte können noch mal verändert werden
//  # var - Seit ECMS 6 wird var nicht mehr verwendet

// ? CONST
const trainerName = "Farid";
console.log(trainerName);


// ? LET
let score = 8;
console.log(score);

let num1 = 5;
console.log("das ist num1:", num1);

let num2 = 55;
console.log("das ist num2:", num2);

let num3 = 44;
console.log({num3});

const num4 = 300
console.log({num4});


// kein let, da wir die variable schon in zeile 20 vor definiert haben
num1 = 105
console.log({num1})

// lässt sich nicht überschreiben da num4 eine konstante ist
// num4 = 400
// console.log({num4})

const addScore = (num1 + num2);
console.log({addScore});

console.log("TEST" ,num1 + num2);

// ! ======= DatenType =========
console.log("======= DatenType =========")

// ? Nummber - String - Boolean

// ? String
// String sind Textwerte
// Um ein String ausgeben lassen zu können, müssen wir "" oder '' schreiben

console.log("das ist ein string" + " hallo")
// wir in die console als weisser text ausgegeben

// ? Nummber
//numerische Werte und werden lila ausgebeben

console.log("NUMBERS");
console.log(10);
console.log(10 + 4);


console.log("10" + "4"); 
// führt eine Zeichenketten-konkatenation durch (+) ist also ein sonderfall alle anderen mathematische zeichen wandeln ein string in eine nummber um
console.log("4" * 4);
console.log("4" * "4");
console.log("10" - "4");


// ? Boolean

// werden ebenfalls lila ausgeben und sie haben nur zwei Werte: true oder false
console.log(true);
console.log(false);


// ! =======Konvertionen======

// * selbsterklärende namen für die Funktionen verwenden
// * nicht zu kurz
// let meineFunktion = "funktion"
// * dürfen nicht zu lang sein
//  let nsjndjsdnjsdnsjkbdkjsdjsdbsbjdjsbdjsbdjkd = "nein, nicht so"

// * dürfen nicht mit zahlen anfangen
// let 2Pac ="nein, nein!"
//statdessen let twoPac = "so ist es besser"

// * camelCase
let meineErsteVariable;
// Englisch ist besser js kann keine umlaute
let myFirstVariable;


// Underscore
let my_First_Variable

// PascalCase


//was nicht geht:
// # let nein-nein-so-nicht;
// # let $bitteSoAUchNIcht;
// # kannichsonichtlesen;


// ! =======Case Sensitive=====
// heisst es unterscheidet auch bei groß und kleinschreibung

// das sind zwei unterschiedliche werte
let a = 10
let A = 100
console.log({a});
console.log({A});


//! =====String Concatination====

console.log("=====String Concatination====");

const firstName = "Wade"
const secondName = "Winston"
const lastName = "Wilson"

const state = "New York"

// let leerzeichen = " "
console.log("ich bin" + firstName + " " + secondName + " " + lastName + " " + "und bin aus" + state);
console.log(`ich bin ${firstName} ${secondName} ${lastName} und ich bin aus ${state}`);


// ! ===== Aritmetische Operatoren=====

let x = 5;
let y = 3;
let z = 15;

// addieren
console.log(x + y);
// subtrahieren
console.log(x - y);
//dividieren
console.log(x / y);
// multiplizieren
console.log(y * z);

// Modulo % = Restwert
console.log(15 % 5); // 0
console.log(5 % 2); // 1
console.log(15 % 4); // 3


// -Increment
// mit ++ wird + ein gerechnet

let zahl1 = 2
console.log({zahl1});
zahl1++; // wird um 1 erhöt
zahl1++; // wird um 1 erhöt
console.log({zahl1}); // gibt uns 4 aus

// - Decrement
// mit -- wird eins vom vorheriger wert abgezogen

let zahl2 = 5;
console.log({zahl2});
zahl2--; // wird um 1 reduziert
zahl2--; // wird um 1 reduziert
console.log({zahl2}); // gibt nun 3 aus


// ! ===== Output =====
console.log("==== Output ====");

// - document,write()
// mit der write () Können wir Elmente in unserem HTML ausgeben

// so wird ein Text ausgegeben
document.write("hallo leute");
// so wird einem HTML-tag
document.write("<h2 class='test'>Ich bin eine h2Headline</h2>")

// - window.alert()
// window.alert("WARNUNG!!!!!!")

// ! ===== Input =====

// - window.prompt()
// öffnet sich ein popup in dem der user etwas eingeben kann
let sayYourName = window.prompt("wie heißt du")
console.log(sayYourName);

let confirm = window.confirm("stimmen sie den coockies zu")
console.log(confirm);

