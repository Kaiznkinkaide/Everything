// # return
// Das return Statmment beeendet eine Function und gibt uns einen Wert zurück
// Sobald eine Function auf das return Statment trifft wird eine Function nicht weiter ausgeführt


function add(number1, number2){
if(number1 === 3){
    return "ne mit 3 kann ich nicht rechnen"
}
return number1 + number2
console.log("wieso bin ich ausgegraut");
const newResult = 2
}

const addFunc = add(3,5)
console.log(addFunc);

// classische func kann auch deklariert werden

const mySecFun = function (number1, number2){
    return number1 * number2
}
console.log(mySecFun(2, 5));


const user = "danie.th.cohen@gmail.com"
const user2 = "hululu@"
const user3 = "janik"


const getName = function (email){
    if(email.includes("@")){
    // sucht den index von dem symbol "@" 
    const atIndex =email.indexOf("@")
    // slice wird von Anfang des strings bis zum "@"
    const name = email.slice(0, atIndex)
    return name
}else{
    return "deine email ist nicht korrekt"
}   
}
console.log(getName(user));
console.log(getName(user2));
console.log(getName(user3));

let num = 20
let num2 = 19

function geradeUngerade(number){
    if(number % 2 === 0){
        return true
    } else{
        return false
    }
}

console.log(geradeUngerade(num));

const tester = geradeUngerade(num2) ? `die zahl ${num2} ist gerade` : `die zahl ${num2} ist ungerade`
console.log(tester);


// # ===== Arrow Function =====
// vorteile
// 1.kürzere Schreibweise
// 2. möglichkeit das wir in eine Zeile schreiben können


function funcAlt(){
    console.log("ich bin die alte schreibweise");
}
funcAlt()

const newFunc = () => {
    console.log("ich bin die neue function");
}
newFunc()

// ohne geschweifte klammern nur bei clg
const kurzFunc = () => console.log("ich bin eine func, die in einer Zeile ausgeführt wird");
kurzFunc()


// # Scope

// globaler Scope
// der globale scope ist quasi unser ganzes JS
// wenn etwas im globalen scope definiert ist kann man überall drauf zugreifen


const firstname = "Alex"
const greet = () => {
    console.log(`hallo ${firstname}`);
}

greet()

// localer scope
// der locale scope kann nur innerhalb einer funtion zugreifen


const greet2 = () => {
    const firstName = "Daniel"
    console.log(`hallo ${firstName}`);
}

greet2()

const User = "Daniel"

const login = () =>{
    console.log(`Du bist eingelogt ${User}`);
}
login()

const serchFunc = () => {
    const follower = "Victor"
    console.log(`${User} hat ${follower} gefolgt`);
}

serchFunc()
