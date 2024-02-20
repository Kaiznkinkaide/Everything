
import './App.css'
import Nav from './assets/components/nav/Nav'
import Haupt from './assets/components/haupt/Haupt'


// !⬆️ Hier werden nur packages und components importiert

function App() {
// !⬆️ Das ist Vanilla JS
// !⬇️ ab hier werden die Daten bearbeitet, functionen geschrieben usw


  return (
    <>
    {/* React Fragment*/}
    //! ab hier sind wir in einem JSX Bereich
    //! hier können wir sowohl HTML Elemente als auch React components schreiben


    // !⬇️ das ist ein HTML element
     <h1>Guten Morgen</h1>
     //!⬇️ Das ist unsere Nav Component
     <Nav/>
     <Haupt/>
    </>
  )
}

export default App
