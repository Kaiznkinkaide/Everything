function display(num){
let figure = document.querySelector("#gallery");
console.log(figure);
figure.innerHTML += `<img width="500px" src="./assets/img/vivek-v-yPlyDFhGwb8-unsplash.jpg" alt="" />`
figure.innerHTML += `<p> Fig. ${num} <p/>`
}

display(1)

display(2)

display(3)