
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import About from'./pages/about/About'
import UseEffectComponent from'./pages/useEffectHook/UseEffectComponent'
import ProductListe from './components/productListe/ProductListe'
import ProductDetails from './components/productDetails/ProductDetails'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path= '/useEffectComponent' element={<UseEffectComponent/>}/>
      <Route path='/productListe' element ={<ProductListe/>}/>
      <Route path='/productListe/:id' element ={<ProductDetails/>}/>
    </Routes>



    </>
  )
}

export default App
