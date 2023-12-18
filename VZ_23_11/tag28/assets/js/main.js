// number()

const string1 = "10"
console.log(string1);
console.log(Number(string1));

// boolean to number => nice to know

console.log(Number(true));
console.log(Number(false));


// toFixed

const number1 = 10.3337283782

console.log(number1.toFixed(1));
console.log(number1.toFixed(2));
console.log(number1.toFixed(3));

// to string

const number2 = 20;

console.log(number2);
console.log(number2.toString(2)); 
console.log(String(number2));

// object Methoden

// Math.round() // auf und abrunden
console.log(Math.round(56.49577773));
console.log(Math.round(56.59577773));

// Math.ceil()
// rundet immer auf den nächsten integer auf // Nur auf
console.log(Math.ceil(33.222222));
// Math.floor()
//rundet immer auf den nächsten integer ab // NUr ab
console.log(Math.floor(33.222222));
// Math.random()
console.log(Math.random());

// würfel wurf
console.log(Math.floor(Math.random() * 6 + 1)); // +1 damit nicht null dabei auftaucht
console.log(Math.ceil(Math.random() * 6 ))

console.log(Math.ceil(Math.random() * 9 + 2 )) // ergebnis zwischen 3 - 11 //

// Math.abs()

console.log(Math.abs(-44555)); // negative zahlen positiv machen

const getRandomNumber = () => {
    const randomNumber = Math.random()
    const randomNumberTimes100 = randomNumber *100
    return Math.ceil(randomNumberTimes100)
}

console.log(getRandomNumber());




