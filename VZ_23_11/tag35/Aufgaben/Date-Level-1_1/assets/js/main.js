
let body = document.querySelector('body')
console.log(body);

let date1 = new Date("September 2, 2019 09:00:00")
let date2 = new Date(0)
let date3 = new Date(31556908800)
let date4 = new Date(86400000)



body.innerHTML = `<p>${date1} = new Date("September 2, 2019 09:00:00"</p>
                    <p>${date2} = new Date(0)</p>
                    <p>${date3} = new Date(31556908800)</p>
                    <p>${date4} = new Date(86400000)</p>
`


