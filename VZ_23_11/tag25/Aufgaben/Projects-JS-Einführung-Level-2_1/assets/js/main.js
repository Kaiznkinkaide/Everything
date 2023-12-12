function send(){
    let input = document.querySelector("#text").value
    let output = document.querySelector("#output")
    let errorOutput = document.querySelector("#errorOutput")
    console.log(input);


    if (input == 0){
    errorOutput.innerHTML = "Gib eine Nachricht ein!!!"
    }
    else{
        output.innerHTML = input
    }

    


}