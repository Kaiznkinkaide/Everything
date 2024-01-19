const Form = ({obj, setObj}) => {
    return ( 
        <>
        <form>
            <input type="text"
            name="firstName"
            id="firstName"
            placeholder="schreib deinen namen"
            value={obj.firstName}
            onChange={(event) => setObj({...obj, firstName: event.target.value})} 
            />

<input type="text"
            name="lasttName"
            id="lasttName"
            placeholder="schreib deinen Nachnamen"
            value={obj.lastName}
            onChange={(event) => setObj({...obj, lastName: event.target.value})} 
            />

<input type="Number" 
            name="age"
            placeholder="Age" 
            id="age"
            value={obj.age}
            onChange = {(event)=> setObj({...obj, age:event.target.value})}
            />

        </form>

            <div>
            <p>{obj.firstName}</p>
            <p>{obj.lastName}</p>
            <p>{obj.age} Jahre</p>
            </div>
        </>
     );
}
 
export default Form;