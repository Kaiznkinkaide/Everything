function doubleMe(){
    let double = document.querySelector(".num").value
    let output = document.querySelector(".output")
    output.innerHTML +=`<p>${double * 2}<p/>`
}