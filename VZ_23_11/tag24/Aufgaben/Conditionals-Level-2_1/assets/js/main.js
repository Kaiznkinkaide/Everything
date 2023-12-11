
let scoreJohn = 0;
let scoreMike = 0;

function scoreJohnCalc(){
    const ageJohn = 22;
    const sizeJohn = 170;
    scoreJohn = ageJohn * 5 + sizeJohn
    console.log(scoreJohn);
}
scoreJohnCalc()

function scoreMikeCalc(){
    const ageMike = 34;
    const sizeMike = 168;
    scoreMike = ageMike * 5 + sizeMike
    console.log(scoreMike);
}
scoreMikeCalc()

function compare(){
if (scoreJohn < scoreMike){
    console.log("mike wins");
}else{
    console.log("john wins");
}
}

compare()






