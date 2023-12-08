function calculate(){
    let year = document.querySelector(".year").value
    let output = document.querySelector(".output")
    const d = new Date
    let date = d.getFullYear()
    output.innerHTML = `<p> ${date - year} <p/>`
}

