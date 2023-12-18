const zahlen = [12, 25, 7, 18, 30, 5];
console.log(zahlen);
let kleineZahlen = zahlen.filter(mini => mini < 20)



const searchMulti = () =>{

console.log(kleineZahlen);


}

const multipli = (zahl) => {
    return zahl * 2
}


const wtf = kleineZahlen.map(multipli)

searchMulti()

console.log(wtf);

multipli()