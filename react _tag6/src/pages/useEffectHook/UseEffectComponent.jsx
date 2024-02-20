import { useEffect, useState } from "react";
import Nav from "../../components/nav/Nav";





const UseEffectComponent = () => {

    const [count, setCount] = useState(0)
    console.log("count ausserhalb der UE", count);

    //! Ein UseEffect ist wie eine Aufsicht und reagiert auf jeweilige veränderungen
//! in die eckigen klammern kommen mehrer States rein, wenn nichts reingeschrieben wird wird es nur einmal am anfang ausgeführt


//! der count ist immer einen hinterher
    const addieren = () =>{
        setCount(count +1)
    }



    useEffect(()=>{

    console.log("count innerhalb der UE", count);
    },[count])



    return ( 
        <>
        <Nav/>
        <h1>UseEffectComponent</h1>
        <button onClick={addieren}>+1</button>
        <p>Count:{count}</p>
        </>
     );
}
 
export default UseEffectComponent;