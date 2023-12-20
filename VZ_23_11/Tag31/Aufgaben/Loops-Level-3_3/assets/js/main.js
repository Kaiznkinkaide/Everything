
let output = document.querySelector("#output")
let array = []

let loop = () => {
    array.splice("o")
    array.splice("O")
    let input = Number(document.querySelector("#number").value)
    if(input === 0){
        output.innerHTML = "Error Mum"
    } else if( input % 2 === 0){
        for(let x=1; x <= input; x++){
            array.push("o")
        output.innerHTML = `L${array.join("")}p`
        
    }} else {
        for(let x=1; x <= input; x++){
            switch(x%2===0){
                case true:
                    array.push("O");
                    break;
                case false:
                    array.push("o")
                    break;
            }
        output.innerHTML = `L${array.join("")}p`
    }
    } }
    

