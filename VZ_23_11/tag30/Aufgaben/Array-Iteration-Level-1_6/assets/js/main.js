let album = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg",
]

console.log(album);

let sortAndSplice = (words) =>{
    return words.map((word) => {
        const dotIndex = word.indexOf(".");
        return dotIndex !== -1
        ? word.slice(0, dotIndex)
        : "invalid"
    })
    
}

console.log(sortAndSplice(album));