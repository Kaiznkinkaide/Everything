


function weatherCheck(){
    let num = document.querySelector("#value").value
    let output = document.querySelector(".message")

    if (num >= 8 && num <= 10){
        output.innerHTML = "super"
    } else if( num >= 6 && num <= 7){
        output.innerHTML = "gut"}
    else if( num >= 3 && num <= 5){
        output.innerHTML = "okay"}
    else if( num >= 0 && num <= 2){
        output.innerHTML = "schlecht"}
    else {
        output.innerHTML = "als ob..."}

}