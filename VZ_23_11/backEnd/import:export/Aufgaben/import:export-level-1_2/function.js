

export const firstOF = (data1, data2) => {
    console.log(data1[0])
    console.log(data2[0]);
}

export const allBut = (data1, data2) =>{
    console.log(data1.slice(0, -1));
    console.log(data2.slice(0, -1));
}

export const last = (data1, data2) =>{
    let new1 = [...data1]
    let new2 = [...data2]
    console.log(new1.pop());
    console.log(new2.pop());
}

export const first = (data1, data2) =>{
    let new1 = [...data1]
    let new2 = [...data2]
let iwas1 = new1.shift()
let iwas2 = new2.shift()
    console.log(new1);
    console.log(new2);
}

export const doublle = (data) =>{
    const noDoubble = [...new Set(data)]
    console.log(noDoubble);
}

export const sum = (data) =>{
    let summe = 0
    for (let i =0; i < data.length; i++){
        summe += data[i]

    }
    console.log(summe);
}

export const randomBetween = (a, b) =>{
    let ergebnis = Math.round(Math.random() * (b - a) +a)
        console.log(ergebnis);
}

export const capitalize = (word) => {
    
    console.log(word.charAt(0).toUpperCase() + word.slice(1));
}

export const uppercase = (word) =>{
    console.log(word.toUpperCase());
}

export const prove= (a, b) =>{
    if ( a.indexOf(0) === b.lastIndexOf(0)){
        console.log("true");
    }else{
        console.log("false");
    }
}