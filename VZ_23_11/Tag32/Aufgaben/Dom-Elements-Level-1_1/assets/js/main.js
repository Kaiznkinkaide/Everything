




const addElement = () =>{

    let inputText = document.querySelector('#input-text').value

    console.log(inputText);
    
let firstChild = document.createElement("li")
firstChild.textContent = inputText

let list  = document.querySelector('#liste')
list.appendChild(firstChild)

let inputTextLeeren = document.querySelector('#input-text')
inputTextLeeren.value = ""

    
    
}