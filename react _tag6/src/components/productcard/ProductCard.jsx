import { Link } from "react-router-dom";





const ProductCard = ({product}) => {
    return ( 
        <>
        <h2>{product.title}</h2>
        <img src={product.images[0]} />
        <Link t={`/productList/${product.id}/`}>Read More</Link>
        </>
     );
}
 
export default ProductCard;