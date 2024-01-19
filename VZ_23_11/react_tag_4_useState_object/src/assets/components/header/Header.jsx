

const Header = ({darkMode, setDarkMode}) => {

const toggle=()=>{
    setDarkMode(darkMode =>!darkMode)
}


// const changeMode = ()=> {
//     if(darkMode){
//         document.body.style.backgroundColor = "black"
//         setDarkMode(!setDarkMode)
//     }else{
//         document.body.style.backgroundColor = "white"
        
//     }
// }





    return (
        <>
        <h1>Header Component</h1>
        <button onClick={toggle}>change mode</button>
        </>
      );
}
 
export default Header;