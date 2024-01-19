import { useState } from "react";


const Counter = () => {
    // Vanilla JS BEREICH
    const [counter, setCounter] = useState(1)

    const minus = () =>{
        setCounter(counter -1)
    }

    const plus = () =>{
        setCounter(counter +1)
    }
    return ( 
        // JSX BEREICH
        // immer mit geschweifteklammer arbeiten
    <>
    <p>{counter}</p>
    {/* <button onClick={()=>{setCounter(counter +1)}}>+1</button> */}
    <button onClick={plus}>+1</button>
    <button onClick={minus}>-1</button>
    </> );
}
 
export default Counter;