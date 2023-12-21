let click = document.getElementById('clickMe')

let Anzahl = 0

    click.addEventListener("click", () =>{
        click.innerHTML = `Click me: ${Anzahl}` 
        Anzahl += 1
    }
    )

