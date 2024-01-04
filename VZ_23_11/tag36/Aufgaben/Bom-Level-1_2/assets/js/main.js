let button = document.querySelector('#btn')
let counterPlace = document.querySelector('.zeit')
let counter = 100
let abbrechen = 0
console.log(button);
console.log(counterPlace);

let count = () => { let time = setInterval(() =>{
    counter--
    counterPlace.innerHTML = `${counter}%`
    if(counter === abbrechen){
        clearInterval(time)
    }

}, 100)} 

