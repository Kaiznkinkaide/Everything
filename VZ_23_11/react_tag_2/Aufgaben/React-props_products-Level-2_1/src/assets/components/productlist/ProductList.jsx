import ProductItem from "../productitem/ProductItem";

const ProductList = ({products}) => {
    return ( 
        <>
{products.map((product, index) =>{
    return(
        <div className="list"key = {index}>
            <ProductItem
            img = {product.img}
            title = {product.title}
            price = {product.price}
            />
        </div>
    )
})}
        </>
     );
}
 
export default ProductList;