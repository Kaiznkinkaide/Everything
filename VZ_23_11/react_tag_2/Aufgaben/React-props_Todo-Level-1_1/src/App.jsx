import './App.css'
import toDos from "./assets/data/todo"
import ToDoList from "./assets/components/todolist/ToDoList";

function App() {


  return (
    <>
    <ToDoList toDos = {toDos}/>


    </>
  )
}

export default App
