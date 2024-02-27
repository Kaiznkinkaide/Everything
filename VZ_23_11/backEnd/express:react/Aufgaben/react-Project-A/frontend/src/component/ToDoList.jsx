import React, { useEffect, useState } from 'react'
import ToDoCard from './ToDoCard'


const ToDoList = () => {
    const[toDo, setTodo] =useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/toDo')
        .then((response)=> response.json())
        .then((toDoJson) =>{
          console.log(toDoJson);
            setTodo(toDoJson)
        })
    }, [])


  return (
    <div>
      {toDo.map((todos) =>{
        return(
        <ToDoCard
        name={todos.name}
        />)
      })}
    </div>
    
  )
}

export default ToDoList