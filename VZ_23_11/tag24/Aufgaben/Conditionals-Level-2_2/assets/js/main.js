

let changeColor = document.querySelector("body")
let 

function changeRange(){
    let value = document.querySelector("#slidebar").value
    let output1 = document.querySelector("#output1")
    let output2 = document.querySelector("#output2")
    let outputValue = document.querySelector("#outputValue")
    outputValue.innerHTML = value
    console.log(value);
    if(value <= 50){
    changeColor.style.backgroundColor = ("green");
    output1.innerHTML = "good"
    output2.innerHTML = "little or no risk"
    } 
    else if(value > 50 && value <= 100){
    changeColor.style.backgroundColor = ("yellow");
    output1.innerHTML = "Moderate"
    output2.innerHTML = "Acceptable qualität"
    } 
    else if(value <= 150 && value > 100){
    changeColor.style.backgroundColor = ("orange");
    output1.innerHTML = "Unhealthy for sensitive groups"
    output2.innerHTML = "Generable publics not likely affected"
    }

}