


function adult(){
    let age = document.querySelector("#num").value
    let output = document.querySelector(".output")
    if(age >= 18){
        console.log(true);
        output.innerHTML = "volljährig"
    }else{
        console.log(false);
        output.innerHTML ="minderjährig "
        console.log(age);
    }
} 