import { Link, useParams } from "react-router-dom";
import users from "../../../data/user.json"


const UserDetail = () => {

    const idParam = useParams()

    const gesuchterUser = users.filter((user) => {
    return user.id.toString() === idParam.id
    })
console.log(gesuchterUser);

    return ( 
        <>
        <h2>UserDetail</h2>
        <h3>{gesuchterUser[0].first_name}</h3>
        <h3>{gesuchterUser[0].last_name}</h3>
        <h4>{gesuchterUser[0].email}</h4>
        <h5>{gesuchterUser[0].gender}</h5>
        <Link to="/userlist"><button>gehe zurück!</button></Link>

        </>
     );
}
 
export default UserDetail;