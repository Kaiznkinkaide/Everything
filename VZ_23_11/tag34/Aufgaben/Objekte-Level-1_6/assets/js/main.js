let myMusic = [
    {
        kunstler: "The Beatles",
        title: "Abbey Road",
        release_jahr: 1969,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        kunstler: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_jahr: 1978,
        formate: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_jahr: 1971,
        formate: ["CS", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_jahr: 1983,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

let meinLieblingsMusic = [{kunster: "Karate Andi",
titel: "lass mal bleiben",
relase_jahr: 2005,
formate: ["LP", "CD", "MC", "Download"], gold: true }]

let newList = [...myMusic, ...meinLieblingsMusic]

console.log(newList);
console.log(newList[0].kunstler);
console.log(newList[0].formate[3]);
let firstYear = myMusic[2].release_jahr
let secondYear = myMusic[3].release_jahr
console.log(`${firstYear} und ${secondYear}`);
console.log(myMusic[3].formate[2]);
console.log(myMusic[3].title.slice(17,22));
console.log(myMusic[2].title.slice(13,15));
console.log(myMusic[1].kunstler.slice(5,10));
