import products from "./assets/data/products"
import './App.css'
import ProductList from "./assets/components/productlist/ProductList"

function App() {

  return (
    <>
    <ProductList products={products}/>
    

    </>
  )
}

export default App
