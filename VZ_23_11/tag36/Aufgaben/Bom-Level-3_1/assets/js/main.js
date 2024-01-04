const cat = document.querySelector('#cat')

let leftPos = 0;
let catinterval


const catWalk = () =>{
    catinterval = setInterval(() => {
        leftPos += 10;
        cat.style.left = `${leftPos}px`
        if (leftPos === 1000)
        clearInterval(catinterval)
    }, 100)
}

const pause = () =>{
    clearInterval(catinterval)
}

const turn = () =>{
    cat.style.transform= "scaleX(-1)"
    clearInterval(catinterval)
    catinterval = setInterval(() => {
        leftPos -= 10;
        cat.style.left = `${leftPos}px`
        if( leftPos === 0){
            clearInterval(catinterval)
}
}, 100)
}

const catSpeed = () =>{
    catinterval = setInterval(() => {
        leftPos += 10;
        cat.style.left = `${leftPos}px`
        if (leftPos === 1000)
        clearInterval(catinterval)
    }, 10)
}