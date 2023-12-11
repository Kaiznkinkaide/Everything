
let outputContainer = document.querySelector("body")
outputContainer.innerHTML += `<p class="output"></p>`

function greaterThan(){
    let age = document.querySelector("#input").value
    let output = document.querySelector(".output")
    if(age >= 18){
        console.log(true);
        output.innerHTML = "oh welcome! Bruder"
    }else{
        console.log(false);
        output.innerHTML =" du bist raus malaga"
        console.log(age);
    }
} 