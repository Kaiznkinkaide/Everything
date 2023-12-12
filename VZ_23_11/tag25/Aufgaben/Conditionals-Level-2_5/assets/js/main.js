


function check() {
let input = document.querySelector("#bundeslandInfo").value
let output = document.querySelector("#bundeslandInfoErgebnis")
    switch (input) {
        case "Baden-Württemberg":
            output.textContent = "hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt"
            break;
        case "Bayern":
            output.textContent = "hat 12,844 Mio Einwohner und München ist die Hauptstadt"
            break;
        case "Brandenburg":
            output.textContent = "485 Mio Einwohner und Potsdam ist die Hauptstadt"
            break;
        case "Bremen":
            output.textContent = "hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt"
            break;
        case "Hamburg":
            output.textContent = "hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt"
            break;
        case "Hessen":
            output.textContent = "hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt"
            break;
        case "Mecklenburg-Vorpommern":
            output.textContent = "hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt"
            break;
        case "Niedersachsen":
            output.textContent = "hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt"
            break;
        case "Nordrhein-Westfalen":
            output.textContent = "hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt"
            break;
        case "Rheinland-Pfalz":
            output.textContent = "hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt"
            break;
        case "Saarland":
            output.textContent = "hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt"
            break;
        case "Sachsen":
            output.textContent = "hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt"
            break; 
        case "Sachsen-Anhalt":
            output.textContent = "hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt"
            break; 
        case "Schleswig-Holstein":
            output.textContent = "hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt"
            break; 
        case "Thüringen":
            output.textContent = "hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt"
            break; 
        case "Berlin":
            output.textContent = "hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt"
            break;
        default:
            output.textContent =  "Ein solches Bundesland gibt es in Deutschland nicht."  
            break;
}
}