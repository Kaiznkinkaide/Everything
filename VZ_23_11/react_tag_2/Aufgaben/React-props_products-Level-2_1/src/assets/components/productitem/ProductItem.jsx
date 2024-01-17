import Button from "../button/Button";
import "./productitem.css"

const ProductItem = ({img, title, price}) => {
    return ( 
        <>
        <img src={img} alt="" />
        <p>{title}</p>
        <p>{price}</p>
        <Button/>

        </>
     );
}
 
export default ProductItem;