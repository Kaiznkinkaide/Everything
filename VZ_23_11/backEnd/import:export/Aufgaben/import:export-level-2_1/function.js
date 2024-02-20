export const moreThen = (data) =>{
    let bigCity = data.filter((city) =>{
        return(
       city.population > 100000
        )
    
    })
    console.log(bigCity);
    
}

export const lessThen = (data) =>{
    let smallCity = data.filter((city) =>{
        return(
       city.population < 100000
        )
    
    })
    console.log(smallCity);
    
}