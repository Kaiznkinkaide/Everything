const heroArr = ["Superman", "Batman", undefined, , "Wonder Woman", "Spider-Man", "Black Widow", "Iron Man", "Thor", "Catwoman", , null];
console.log(heroArr);

let cutCut = () => {
const myHeros = heroArr.filter((hero) => hero !== null && hero !== undefined)
console.log(myHeros)
}

cutCut()
