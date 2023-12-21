let output = document.getElementById('output')
let select = document.getElementById('choice')


select.addEventListener('change',() => {
    let selectValue = document.getElementById('choice').value
    output.innerHTML = `Sie haben ausgewählt: ${selectValue} `
})

