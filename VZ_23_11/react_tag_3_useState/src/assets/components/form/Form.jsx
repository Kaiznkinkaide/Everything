import { useState } from "react";

const Form = () => {
//                                          string
    // const[firstName, setFirstName] = useState("")
    // const[lastName, setLastName] = useState("")
    // const[age, setAge] = useState("")
    // const[happy, setHappy] =useState(false)


    console.log(firstName);
    
    return ( 
        <>
        <h1>Form</h1>
        <form>
            <input type="text" 
            placeholder="Firstname" 
            value={firstName}
            onChange = {(event)=> setFirstName(event.target.value)}
            />

            <input type="text" 
            placeholder="Laststname" 
            value={lastName}
            onChange = {(event)=> setLastName(event.target.value)}
            />

            <input type="Number" 
            placeholder="Age" 
            value={age}
            onChange = {(event)=> setAge(event.target.value)}
            />

        <input type="checkbox" 
        value={happy}
        onChange={(event) => setHappy(event.target.checked)}
        />




        </form>

        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>Age:{age}</p>
        <p>bist du Happy? {happy ? "🌝" : "🌚"}</p>
        </>
     );
}
 
export default Form;