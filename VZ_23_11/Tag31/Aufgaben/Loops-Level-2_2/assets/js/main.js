
let output = document.querySelector("#output")
let array = []

let loop = () => {
    let input = Number(document.querySelector("#number").value)

    for(let x=1; x <= input; x++){
        array.push("o")
    
    } 
    
    output.innerHTML = `L${array.join("")}p`
    console.log(input);
}