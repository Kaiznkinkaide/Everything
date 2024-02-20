import "./carditem.css"

const CardItem = (props) => {
    return ( 
        <>
        <h2>{props.title}</h2>
        <img src={props.img}/>
        <p>{props.price}</p>
        </>
     );
}

export default CardItem;