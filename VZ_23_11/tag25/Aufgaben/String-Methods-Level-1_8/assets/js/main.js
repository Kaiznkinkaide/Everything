text = "Sam is going to school"
const var1 = text.slice(0,4)
const var2 = text.slice(5,-7)
const var3 = text.slice(-1,-7)
const char1 = text.slice(0)
const char2 = text.slice(4)
const char3 = text.slice(7)
const char4 = text.slice(13)
const char5 = text.slice(16)
const rest1 = text.slice(1, 4)
const rest2 = text.slice(5, 7)
const rest3 = text.slice(8, 13)
const rest4 = text.slice(14, 16)
const rest5 = text.slice(17, -1)


document.write(var1.toUpperCase() + var2.toLowerCase() + var3.toUpperCase() + "<br>")

document.write(var1.toLowerCase() + var2.toUpperCase() + var3.toLowerCase() + "<br>")

document.write(char1.toUpperCase() + rest1.toLowerCase() + char2.toUpperCase() + rest2.toLowerCase() + char3.toUpperCase() + rest3.toLowerCase() + char4.toUpperCase() + rest4.toLowerCase() + char5.toUpperCase() + rest5.toLowerCase())