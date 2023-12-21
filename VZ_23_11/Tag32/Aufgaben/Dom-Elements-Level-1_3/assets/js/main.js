
let buttons = document.querySelector('.unten')
let buttonsChildren = buttons.children
let buttonsArray = Array.from(buttonsChildren)
let mylist = document.querySelector('#myList')
console.log(mylist);
let mylistChildren = mylist.children
let mylistArray = Array.from(mylistChildren)
let mylistFirstChild = mylist.firstElementChild
let mylistLastChild = mylist.lastElementChild
let mylistFirstSibling = mylist.firstElementChild.nextElementSibling
let mylistLastSibling = mylist.lastElementChild.previousElementSibling
let output = document.querySelector('output')
buttons.firstElementChild.addEventListener("click", () =>{
    output.textContent = mylistFirstChild.innerHTML
})
buttons.firstElementChild.nextElementSibling.nextElementSibling.addEventListener("click", () =>{
    output.textContent = mylistLastChild.innerHTML
})
buttons.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.addEventListener("click", () =>{
    output.textContent = mylistFirstSibling.innerHTML
})
buttons.lastElementChild.addEventListener("click", () =>{
    output.textContent = mylistLastSibling.innerHTML
})















