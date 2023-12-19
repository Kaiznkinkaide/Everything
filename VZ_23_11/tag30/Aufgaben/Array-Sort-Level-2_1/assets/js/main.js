let names =["Sergio", "Hannah", "Regallager", "Reliefpfeiler", "Rentner"]



function reverse(str) {
if (str === '') {
return '';
} else {
    return reverse(str.substr(1)) + str.charAt(0);
    }
}

let reverseStringIs = reverse('han nesaH has ennaH')
console.log(reverseStringIs)
