
// * Dates Objects

const date = new Date()

console.log(date);
console.log(typeof date);

const date2 = new Date(2000, 1, 16)

console.log(date2);

// ! NO GO // man muss mindestens 2  parameter angeben oder keinen!
console.log(new Date(2000, 3));

// das gibt uns eine MiliSekunde zurück
console.log(Date.now());

console.log(date.toString());
console.log(typeof date.toString());

console.log(date.toUTCString());
console.log(date.toISOString());

// * toLocale-Methoden

console.log(date.toLocaleString("de", {dateStyle: "full"}));
console.log(date.toLocaleString("de", {dateStyle: "long"}));
console.log(date.toLocaleString("de", {dateStyle: "medium"}));
console.log(date.toLocaleString("de", {dateStyle: "short"}));

console.log(date.toLocaleDateString());


// * mit get-Methoden auf informationen zugreifen

console.log("getDate()",date.getDate());
console.log("getFullYear()",date.getFullYear());
console.log("getMonth()",date.getMonth());
console.log("getTime()",date.getTime());
console.log("getHours/Minutes/Seconds", date.getHours(), date.getMinutes(), date.getSeconds());

// * Set-Methoden

const date3 = new Date()
console.log(date3);

date3.setFullYear(2008)
date3.setMonth(10)

console.log(date3);
