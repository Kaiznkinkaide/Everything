import { Link } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import React from 'react'

const Home = () => {
    return ( 
        <>
        <Nav/>
        <h1>Home</h1>
        <Link to="/productListe"><button>Go to our shop</button></Link>
        </>
     );
}
 
export default Home;