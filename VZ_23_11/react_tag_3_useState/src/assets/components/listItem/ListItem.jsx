import CardItem from "../cardItem/CardItem";
import"./listitem.css"


const ListItem = ({data}) => {
    console.log(data);
    return ( 
        <>
        <main>
            {data.map((car, index) =>{
                // console.log(index);
                return (
                    <div key={index}>
                        <CardItem
                        marke={car.marke}
                        farbe={car.farbe}
                        modell={car.modell}
                        produktionsjahr={car.produktionsjahr}
                        ps={car.ps}
                        
                        />
                    </div>
                )

            })}
        </main>

        </>
     );
}
 
export default ListItem;