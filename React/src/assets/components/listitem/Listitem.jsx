import CardItem from "../carditem/CardItem";

const Listitem = () => {
    return ( 
        <>
        <h1>Das ist ein ListItem Component</h1>
        <CardItem
        title ={"city"}
        img = {"https://source.unsplash.com/random/?city"}
        price = {"19,99"}
        />

        <CardItem
        title ={"book"}
        img = {"https://source.unsplash.com/random/?book"}
        price = {"29,99"}
        />

        <CardItem
        title ={"night"}
        img = {"https://source.unsplash.com/random/?night"}
        price = {"39,99"}/>
        </>
     );
}
 
export default Listitem;