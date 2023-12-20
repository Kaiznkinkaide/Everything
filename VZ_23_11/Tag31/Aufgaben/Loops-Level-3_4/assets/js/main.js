let output = document.querySelector('#output')
let empty = []
let countMeDaddy = () => {
    let erste = document.querySelector('#erste').value
    let zweite = document.querySelector('#zweite').value
    let max = Number(document.querySelector('#max').value)
    for(let i = 2;i <= max; i++){
        if(i % erste === 0){
            empty.push(i)
        }else if(i % zweite === 0){
            empty.push(i)} }
    let sum = empty.reduce((pizza, pasta) => {
        return pizza + pasta;}, 0)
    output.innerHTML = sum}