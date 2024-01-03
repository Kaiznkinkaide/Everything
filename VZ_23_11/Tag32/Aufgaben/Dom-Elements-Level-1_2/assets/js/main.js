let counter = 1
const myFunction = () => {let example = document.getElementsByClassName('example')
for (let i = 0; i < example.length; i++) {
    if(counter % 2 === 0){example[i].style.backgroundColor = 'Black';
        example[i].style.color = 'white';
        }else {example[i].style.backgroundColor = '';
        example[i].style.color = ''}} counter += 1}