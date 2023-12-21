// * EVENT & EVENTLISTENER

// Aufbau
// 1welches Element soll beobachtet werden
// 2Eventlistener hinzufügen
// myBtn.addEventListener()

//3 Event definieren
// myBtn.addEventListener("click")

const myBtn =document.querySelector('#say-hi-btn')
const output = document.querySelector('#output')

myBtn.addEventListener("click", ()=>{
output.innerHTML = "HAllo von EventListener"
})


//* =====MouseOver=======


const input = document.querySelector('#input')
input.addEventListener('mouseover', () =>{
    console.log("die maus wurde über mich bewegt");
    input.style.border = '3px solid red'
})


// * ======MouseOut========


input.addEventListener('mouseout', () =>{
    console.log("die maus hat mich verlassen");
    input.style.border = '3px solid blue'
})


// * ====Change======

const selectInput = document.querySelector('#select-input')
const selectOutput = document.querySelector('#select-output')

selectInput.addEventListener("change",()=>{
    console.log("ich wurde verändert");
    selectOutput.innerHTML= selectInput.value
    selectOutput.style.color = "red"
})


// * =====Keypress======

const username = document.querySelector('#username').addEventListener('keypress', () =>{
    const user = document.querySelector('#user')
    user.style.backgroundColor = "red"
    user.style.color = "blue"
})

// * ======Keyup========

const hacker = document.querySelector('#hacker')
const log = document.querySelector('#log')

hacker.addEventListener('keyup',keyUp)

function keyUp(event){
    console.log(event.code);
}



const liste = document.querySelector('#myList')
console.log(liste);

const firstChildVonMeinerLIste = liste.firstElementChild.innerHTML

console.log(firstChildVonMeinerLIste);

const lastChildVonMeinerListe = liste.lastElementChild.style.color = "red"

const geschwisterElementVonAnfang = liste.lastElementChild.previousElementSibling.innerHTML
console.log(geschwisterElementVonAnfang);

liste.firstElementChild.style.color = "blue" 

liste.lastElementChild.previousElementSibling.style.color = "green" 



// * HTMLCollection

// beinahe Array ( HTML Collection)
const LiElementeToFastArray = liste.children
//
console.log('LiElementeArray',LiElementeToFastArray);

// da dieser oben erzeugte datenTyp noch kein richtiges Array ist brauchen wir die untere methode un ein echtes daraus zu machen 

// umwandel in echtes Arry
const LiElementeArrayUmwandeln = Array.from(LiElementeToFastArray)
//
console.log('LiElementeArrayUmwandeln', LiElementeArrayUmwandeln);

LiElementeArrayUmwandeln.forEach((singleElemt) =>{
    singleElemt.style.color = "purple"
})


// so verändern wir was und sprechen direkt dsie Index Position der children an

LiElementeArrayUmwandeln[0].innerHTML = "Salat"

LiElementeArrayUmwandeln[0].style.color = "red"


const zugriffAufDasParentElemnt = liste.parentElement

console.log('zugriffAufDasParentElemnt',zugriffAufDasParentElemnt);

zugriffAufDasParentElemnt.style.border = "1px solid black"


const fließband = document.querySelector('#fließband')

const firstAuto = document.createElement("li")
firstAuto.textContent = "Benz"
console.log(firstAuto);

const secondAuto = document.createElement("li")
secondAuto.textContent = "Tesla"
console.log(secondAuto);

const thirdAuto = document.createElement("li")
thirdAuto.textContent = "BMW"
console.log(thirdAuto);

// push() ==== unshift()

fließband.appendChild(firstAuto)
fließband.appendChild(secondAuto)

// prepend() ist wie unshift

fließband.prepend(thirdAuto)



let imageVonDom = document.createElement("img")

imageVonDom.setAttribute("src", "https://unsplash.it/200")




