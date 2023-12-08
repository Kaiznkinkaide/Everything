
document.getElementById("info").innerHTML = "<h1>Hello World!</h1><h2>How are you</h2>";

document.getElementById("container").innerHTML = "<p>start of the element</p>";

document.write("end of the elemnt")




function showit(){
    let eingabe = document.querySelector(`input`).value;
    console.log(eingabe);
    let body = document.querySelector(".textfeldOutput");
    body.innerHTML += `<p>${eingabe}<p/>`
    console.log(new Date().toString());
    document.querySelector('#info').innerHTML += (new Date().toString());
    body.innerHTML += `<p>Hello again<p/>`
}


