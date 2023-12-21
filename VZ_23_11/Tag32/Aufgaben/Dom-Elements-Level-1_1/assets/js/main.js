const addElement = () =>{let inputTextLeeren = document.querySelector('#input-text')
    if(inputTextLeeren.value === ""){return null
    } else{let inputText = document.querySelector('#input-text').value
        let firstChild = document.createElement("li")
        firstChild.textContent = inputText
        let list  = document.querySelector('#liste')
        list.appendChild(firstChild)}}