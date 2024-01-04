let message = document.querySelector('.message')
let output = document.querySelector('#count')
let counter = 11


let timmer = setInterval(() =>{
    counter--
    output.innerHTML = `${counter}`
    if(counter === 0){
        clearInterval(timmer)
        message.style.display = "none"
    }
}, 100)