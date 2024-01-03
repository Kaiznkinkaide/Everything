let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];





const monatsName = (name) =>{
    const month = new Date(name).getMonth()
    const monthName = list[month]
    return monthName

}


console.log(monatsName("2001-3-4"));
console.log(monatsName("2019-12-24"));
console.log(monatsName("1410-07-15"));


