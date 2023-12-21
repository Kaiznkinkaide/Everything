let gray = document.getElementById('grauTaste')
let white = document.getElementById('weissTaste')
let blue= document.getElementById('blauTaste')
let yellow = document.getElementById('gelbTaste')
let body = document.querySelector('body')

gray.addEventListener("click", () =>{
    body.style.backgroundColor = "gray"
})
white.addEventListener("click", () =>{
    body.style.backgroundColor = "white"
})
blue.addEventListener("click", () =>{
    body.style.backgroundColor = "blue"
})
yellow.addEventListener("click", () =>{
    body.style.backgroundColor = "yellow"
})

