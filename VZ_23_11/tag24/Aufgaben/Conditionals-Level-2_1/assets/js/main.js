
// let scoreJohn = 0;
// let scoreMike = 0;

// function scoreJohnCalc(){
//     const ageJohn = 22;
//     const sizeJohn = 170;
//     scoreJohn = ageJohn * 5 + sizeJohn
//     console.log(scoreJohn);
// }
// scoreJohnCalc()

// function scoreMikeCalc(){
//     const ageMike = 34;
//     const sizeMike = 168;
//     scoreMike = ageMike * 5 + sizeMike
//     console.log(scoreMike);
// }
// scoreMikeCalc()

// function compare(){
// if (scoreJohn < scoreMike){
//     console.log("mike wins");
// }else{
//     console.log("john wins");
// }
// }

// compare()


const ageJohn = 22
const ageMeike = 34
const sizeJohn = 170
const sizeMeike = 168
const nameJohn = "John"
const nameMeike = "Meike"
let scoreJohn = 0
let scoreMeike = 0

function calcScore(age, size, name){
    if(name == "John")
        scoreJohn = age * 5 + size
    else if(name == "Meike")
        scoreMeike = age * 5 + size
}

function compare(){
    calcScore(ageJohn, sizeJohn, nameJohn)
    calcScore(ageMeike, sizeMeike, nameMeike)
    if(scoreMeike > scoreJohn){
        console.log("Meike wins")
    }
    else if(scoreJohn > scoreMeike){
        console.log("John wins")
    } else{
        console.log("Unentschieden")
    }
}

compare()






