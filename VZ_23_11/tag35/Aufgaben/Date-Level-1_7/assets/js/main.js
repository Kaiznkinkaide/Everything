let freiOderNicht = (datum) =>{
    const days = new Date(datum).getDay()
if (days === 0 || days === 6){
return `Weekend`} else { return `Arbeitstag`}
}

console.log(freiOderNicht("12.15.2019"));
console.log(freiOderNicht("2.16.2001 "));
console.log(freiOderNicht("2.1.2020"));
console.log(freiOderNicht("2.29.2020"));