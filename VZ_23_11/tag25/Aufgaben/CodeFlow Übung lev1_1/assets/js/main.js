function checkAge(){
    let input = document.querySelector("#num").value
    let output = document.querySelector("#output")
    console.log(input);

    let inputValue = input >= "18" ? "Volljährig" : "minderjährig"
    output.innerHTML = inputValue
    
}