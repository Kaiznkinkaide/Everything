const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(number);

const geradezahlen = number.filter(num => num % 2 === 0)
console.log(geradezahlen);

const ungeradezahlen = number.filter(num => num % 2 !== 0)
console.log(ungeradezahlen);

