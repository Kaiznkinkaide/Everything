import Nav from "../nav/Nav";
import userlist from "../userlist/UserList"
import users from "../../../data/user.json"
import UserCard from "../usercard/UserCard";
import { useState } from "react";

const UserList = () => {
    console.log(users);
    let [userData, setUserData] = useState(users)
    
    return (
        <>
        <Nav/>
        <h1>USERLIST</h1>
{userData.map((user, index)=>{
    return(
    <div key={index}>
        <UserCard
        user={user}
        id={user.id}/>


    </div>
    )
})}
        
        </>
      );
}
 
export default UserList;