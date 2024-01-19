const CardItem = ({marke, farbe, modell, produktionsjahr, ps}) => {
    return ( 
        <>
        <h4>Marke{marke}</h4>
        <p>Farbe:{farbe}</p>
        <p>Modell:{modell}</p>
        <p>Produktionsjahr:{produktionsjahr}</p>
        <p>ps:{ps}</p>


        </>
     );
}
 
export default CardItem;