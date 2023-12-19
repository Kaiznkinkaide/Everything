let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]


let sortGetraenke = getraenke.sort()
console.log(sortGetraenke);

function myDrinks(){
    sortGetraenke.forEach((drinks) => {
document.write("<p>" + drinks + "</p>")
    })
}
    

myDrinks()