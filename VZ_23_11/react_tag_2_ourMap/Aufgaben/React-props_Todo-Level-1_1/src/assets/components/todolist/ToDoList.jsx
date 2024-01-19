
import ToDoItem from "../todoitem/ToDoItem";

const ToDoList = ({toDos}) => {
    return ( 
        <>
        <h1> Meine ToDo Liste</h1>

        {toDos.map((toDo, index) =>{
            return(
            <ul key={index} >
                <ToDoItem
                title={toDo.title}/>
            </ul>
        )})}
        </>
     );
}

export default ToDoList