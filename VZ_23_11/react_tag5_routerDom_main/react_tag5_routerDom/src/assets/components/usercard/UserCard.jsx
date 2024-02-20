import { Link } from "react-router-dom";

const UserCard = ({user, id}) => {
    return ( 

        <>
        <h3>{user.last_name}</h3>
        <Link to={`/userlist/${id}`}>MoreInfo</Link>

        </>
     );
}
 
export default UserCard;