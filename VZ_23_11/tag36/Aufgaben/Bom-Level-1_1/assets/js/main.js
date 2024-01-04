let counter = 11
let interrupt = 8
let abbrechen = 0
console.log("Sart: warten für 3 Sekunden");

const timer = setInterval(() => {

    counter--
    console.log(counter);
    if(counter === interrupt){
        console.log("Erledigt. du hast 3Sekunden verschwendet");
    }
    if( counter === abbrechen){
        clearInterval(timer)

    }
}, 1000)







