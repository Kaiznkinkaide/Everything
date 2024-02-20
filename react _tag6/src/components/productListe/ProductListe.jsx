import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../nav/Nav";
import ProductCard from "../productcard/ProductCard";


const ProductListe = () => {




const [products, setProducts] =useState([])

const api ="https://dummyjson.com/products"

useEffect(() =>{
    const fetchApi = async () =>{
        const resp = await axios.get(api)
    setProducts(resp.data.products)
    }
    fetchApi()
}, [])

console.log(products);

    return ( 
        <>
        <Nav/>
        <h1>ProductListe</h1>
        {products.map((product, index)=>{
            return (
                <div key={index}>
                    <ProductCard
                    product={product}
                    />
                </div>
            )

        })}
        </>
     );
}
 
export default ProductListe;