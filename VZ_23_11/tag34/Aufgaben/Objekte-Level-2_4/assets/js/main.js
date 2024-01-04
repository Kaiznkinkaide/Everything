const singers = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];

let nameMap = singers.map((ele) =>{
    return ele.name
});
console.log(nameMap);

let countryMap = singers.map((ele)=>{
    return ele.country
})
console.log(countryMap);

let period_activeMapStart = singers.map((ele)=>{
    return ele.period_active.start
})
console.log(period_activeMapStart);

let period_activeMapEnd = singers.map((ele)=>{
    return ele.period_active.end
})
console.log(period_activeMapEnd);

let genreMap = singers.map((ele)=>{
    return ele.genre
})
console.log(genreMap);

let container = document.querySelector('#table-container')
let tabelHead = document.createElement('tr')
tabelHead.innerHTML = `<th onclick="name()"> Name </th> <th onclick="country()">Country</th> <th onclick="period()"> Period Active </th> <th onclick="genre()"> Genre </th> `
container.appendChild(tabelHead)
for (let i = 0; i<nameMap.length; i++){
    let rowStart = document.createElement('tr')
    rowStart.innerHTML = `<th>${nameMap[i]}</th> <th>${countryMap[i]}</th> <th>${period_activeMapStart[i]} - ${period_activeMapEnd[i]} </th> <th>${genreMap[i]}</th> `
    container.appendChild(rowStart)
}

const name = () =>{
    clear()
    let singersSort = singers.sort((a, b) => {
        if(a.name < b.name){
            return -1;
        }else if(a.name > b.name){
            return 1;
        }  
    })

    let sortNameMap = singersSort.map((ele) =>{
        return ele.name})
    let sortCountryMap = singersSort.map((ele) =>{
        return ele.country})
    let sortPeriodeStart = singersSort.map((ele) =>{
        return ele.period_active.start})
    let sortPeriodeEnd = singersSort.map((ele) => {
        return ele.period_active.end})
    let sortGenreMap = singersSort.map((ele) => {
        return ele.genre
    })


    let container = document.querySelector('#table-container')
    tabelHead.innerHTML = `<th onclick="name()"> Name </th> <th onclick="country()">Country</th> <th onclick="period()"> Period Active </th> <th onclick="genre()"> Genre </th> `
    container.appendChild(tabelHead)
    for (let i = 0; i<nameMap.length; i++){
    let rowStart = document.createElement('tr')
    rowStart.innerHTML = `<th>${sortNameMap[i]}</th> <th>${sortCountryMap[i]}</th> <th>${sortPeriodeStart[i]} - ${sortPeriodeEnd[i]} </th> <th>${sortGenreMap[i]}</th> `
    container.appendChild(rowStart)
    }
}

const country = () =>{
    clear()
    let singersSort = singers.sort((a, b) => {
        if(a.country < b.country){
            return -1;
        }else if(a.country > b.country){
            return 1;
        }  
    })

    let sortNameMap = singersSort.map((ele) =>{
        return ele.name})
    let sortCountryMap = singersSort.map((ele) =>{
        return ele.country})
    let sortPeriodeStart = singersSort.map((ele) =>{
        return ele.period_active.start})
    let sortPeriodeEnd = singersSort.map((ele) => {
        return ele.period_active.end})
    let sortGenreMap = singersSort.map((ele) => {
        return ele.genre
    })


    let container = document.querySelector('#table-container')
    tabelHead.innerHTML = `<th onclick="name()"> Name </th> <th onclick="country()">Country</th> <th onclick="period()"> Period Active </th> <th onclick="genre()"> Genre </th> `
    container.appendChild(tabelHead)
    for (let i = 0; i<nameMap.length; i++){
    let rowStart = document.createElement('tr')
    rowStart.innerHTML = `<th>${sortNameMap[i]}</th> <th>${sortCountryMap[i]}</th> <th>${sortPeriodeStart[i]} - ${sortPeriodeEnd[i]} </th> <th>${sortGenreMap[i]}</th> `
    container.appendChild(rowStart)
    }
}

const genre = () =>{
    clear()
    let singersSort = singers.sort((a, b) => {
        if(a.genre < b.genre){
            return -1;
        }else if(a.genre > b.genre){
            return 1;
        }  
    })

    let sortNameMap = singersSort.map((ele) =>{
        return ele.name})
    let sortCountryMap = singersSort.map((ele) =>{
        return ele.country})
    let sortPeriodeStart = singersSort.map((ele) =>{
        return ele.period_active.start})
    let sortPeriodeEnd = singersSort.map((ele) => {
        return ele.period_active.end})
    let sortGenreMap = singersSort.map((ele) => {
        return ele.genre
    })


    let container = document.querySelector('#table-container')
    tabelHead.innerHTML = `<th onclick="name()"> Name </th> <th onclick="country()">Country</th> <th onclick="period()"> Period Active </th> <th onclick="genre()"> Genre </th> `
    container.appendChild(tabelHead)
    for (let i = 0; i<nameMap.length; i++){
    let rowStart = document.createElement('tr')
    rowStart.innerHTML = `<th>${sortNameMap[i]}</th> <th>${sortCountryMap[i]}</th> <th>${sortPeriodeStart[i]} - ${sortPeriodeEnd[i]} </th> <th>${sortGenreMap[i]}</th> `
    container.appendChild(rowStart)
    }
}

const period = () =>{
    clear()
    let singersSort = singers.sort((a, b) => {
        if(a.period_active.start > b.period_active.start){
            return -1;
        }else if(a.period_active.start < b.period_active.start){
            return 1;
        }  
    })

    let sortNameMap = singersSort.map((ele) =>{
        return ele.name})
    let sortCountryMap = singersSort.map((ele) =>{
        return ele.country})
    let sortPeriodeStart = singersSort.map((ele) =>{
        return ele.period_active.start})
    let sortPeriodeEnd = singersSort.map((ele) => {
        return ele.period_active.end})
    let sortGenreMap = singersSort.map((ele) => {
        return ele.genre
    })


    let container = document.querySelector('#table-container')
    tabelHead.innerHTML = `<th onclick="name()"> Name </th> <th onclick="country()">Country</th> <th onclick="period()"> Period Active </th> <th onclick="genre()"> Genre </th> `
    container.appendChild(tabelHead)
    for (let i = 0; i<nameMap.length; i++){
    let rowStart = document.createElement('tr')
    rowStart.innerHTML = `<th>${sortNameMap[i]}</th> <th>${sortCountryMap[i]}</th> <th>${sortPeriodeStart[i]} - ${sortPeriodeEnd[i]} </th> <th>${sortGenreMap[i]}</th> `
    container.appendChild(rowStart)
    }
}

const clear = () => {
    container.innerHTML = ""
}
























