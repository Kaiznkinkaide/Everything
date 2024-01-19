import { useState } from 'react'
import Form from "./assets/components/form/Form"
import Header from './assets/components/header/Header'


function App() {
  const [obj, setObj] = useState({
    firstName:"",
    lastName:"",
  })

  const[darkMode, setDarkMode] = useState(false)

  return (
    <>
    <Header 
    darkMode={darkMode}
    setDarkMode={setDarkMode}/>
    <Form
    setObj={setObj}
    obj={obj}/>
    </>



)
}

export default App
