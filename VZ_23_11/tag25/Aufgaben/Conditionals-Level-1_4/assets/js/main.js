
function check(){
let value = document.querySelector("#password").value
let valueLength = value.length
console.log(valueLength);
let output = document.querySelector("#output")

let agree = valueLength >= "8" 
? `<p style="color: green"> tahts okay </p>` 
: `<p style="color: red"> try again </p>`;
output.innerHTML = agree;



}