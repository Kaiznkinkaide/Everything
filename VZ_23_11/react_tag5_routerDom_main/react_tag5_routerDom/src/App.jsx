
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import About from './pages/about/About'
import UserList from './assets/components/userlist/UserList'
import UserDetail from './assets/components/userdetail/UserDeatail'

function App() {


  return (
    <>
    <Routes>
      {/* hier werden die adressen unserer components festgestellt */}
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/userlist' element= {<UserList/>} />
      <Route path='/userlist/:id' element= {<UserDetail/>} />
      
    </Routes>

    </>
  )
}

export default App
