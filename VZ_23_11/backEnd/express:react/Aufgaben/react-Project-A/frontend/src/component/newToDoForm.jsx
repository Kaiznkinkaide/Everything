import React, { useRef } from 'react'

const NewToDoForm = () => {
    const nameInputRef = useRef();

    const handleSubmit = () =>{
        const name = nameInputRef.current.value;
        fetch("http://localhost:3000/toDo",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name}),
        })
    }
  return (
    
    <form>
    <input ref={nameInputRef} type="text" placeholder='task that you want to do!'/>
    <button type='button' onClick={handleSubmit}>eintragen</button>
    </form>
  )
}

export default NewToDoForm