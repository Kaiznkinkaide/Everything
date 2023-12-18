// string Number und Boolean


const string = "ich bin ein string"
const number = 245
const boolean = true

// * Array

let team = ["Alex" , "John", "Kim", "Jimmy", "Tommy" ]
console.log(team);

let player1 = "Alex";
let player2 = "John";
let player3 = "Kim";

let teamArr =[player1, player2, player3]
console.log(teamArr);

// * index

// so können wir auf einzelne Elemente zugreifen, in dem wir eine Zahl in eckige klammer reinschreiben


console.log(team[1]); // John
console.log(team[4]); // Tommy

// * indexOf()
// sucht in einem Array nach dem suchwort und gibt uns den index zurück

console.log(team.indexOf("John")); // 1
console.log(team.indexOf("Jimmy")); // 3


 // so überschreibt man Arrays mit dem IndexOf des wortes
team[0]= "Julia"
team[2] = "Daniel"

console.log(team);

// dynaimsch
console.log(team.indexOf("Julia")); // index = 0
team[team.indexOf("Julia")] = "Nina"
console.log(team);


const searchUser = () => {
    let user = document.querySelector("#user").value
    console.log(user);
    let newUser = document.querySelector("#newUser").value
    console.log(newUser);
    team[team.indexOf("user")] = newUser

    let userIndex = team.indexOf(user);


    if (team.includes(user)) {
        team[team.indexOf(user)] = newUser;
    } else {
        console.log("User nicht gefunden");
    }
    console.log(team);
}

// * length

console.log(team.length); // 5


// just good to know
console.log(team[team.length - 1]);

let = mitarbeiter = ["Jimmy", "Johanna", "Christian", "Jannik", "Steffen"]

console.log(mitarbeiter);

// * pop()
console.log(
    "%c --------pop-------", "color: red"
);

let popMitarbeiter = mitarbeiter.pop() // löscht das letzte Element
console.log(popMitarbeiter);
console.log(mitarbeiter);


// * shift()
// die schift() methode entfernt das erste Elment in eiem Arry und gibt das gelöschte Elemnt zurück
console.log(
    "%c --------shift-------", "color: red"
);
let shiftMitarbeiter = mitarbeiter.shift()
console.log(shiftMitarbeiter);

console.log(mitarbeiter);


// * push()

// die push() Methode fügt an der letzten Stelle ein Element hinzu und gibt uns die neue länge von dem Array zurück
console.log(
    "%c --------push-------", "color: red"
);
let pushMitarbeiter = mitarbeiter.push("Lisa")
console.log(pushMitarbeiter);
console.log(mitarbeiter);



// const einstellen = () => {
//     let neueMitarbeiter = document.querySelector("#neueMitarbeiter").value
//     console.log(neueMitarbeiter);
//     mitarbeiter.push(neueMitarbeiter)

//     console.log(mitarbeiter);
// }
console.log(
    "%c --------unshift-------", "color: red"
);

// * unshift()
// die unshift Methode fügt an der ersten stelle eines Arrays ein Element hinzu und git die neue länge aus

let unshiftMitarbeiter = mitarbeiter.unshift("Timo")
console.log(unshiftMitarbeiter);
console.log(mitarbeiter);

console.log(
    "%c --------join-------", "color: red"
    );
    //* join()
    // Mit join() können wir einen Array zu einem String umwandeln

let heros = ["Batman" , "Thejoker", "Ironman", "Thor", "ProffesorX"]
console.log(heros);

console.log(heros.join(" "));
const ul = document.querySelector("ul")
ul.innerHTML = "<li>" + heros.join("</li><li>") + "</li>"


console.log(
    "%c --------filter-------", "color: red"
    );

    //* filter

    const numbers = [1, 2, 3, 4, 5]

    const evenNumber = numbers.filter(num => num % 2 === 0)
    console.log(evenNumber);
    const batman = heros.filter(char => char === "Superman")
    console.log(batman);