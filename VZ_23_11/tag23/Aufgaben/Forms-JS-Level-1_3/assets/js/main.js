function calculate(){
    let year1 = document.querySelector(".year1").value
    let year2 = document.querySelector(".year2").value
    let output= document.querySelector(".output")

    output.innerHTML += `<p> ${Math.sqrt(Math.pow((year1 - year2),2))}<p/>`

}