// 1.)
let length = 16.78; // Number
let lastName = "Johnson"; // String
let car = ""; // String?!? Null??? -> String!!!
let isOpen = true; // Boolean

console.log("1.)", typeof length, typeof lastName, typeof car, typeof isOpen);

// 2.)
let ageMark = "45";
let ageJohn = 127;

console.log("2.)", typeof ageMark, typeof ageJohn);

// 3.)
let isJohnOlderThanMark = ageJohn > ageMark;
console.log("3.) John is older than Mark:", isJohnOlderThanMark);

// 4.)
let str;
console.log("4.)", typeof str);

// 5.)
str = "Kaffeepause"; //
console.log("5.)", typeof str);

// 6.)
let letzterIndexStr = str.length - 1;
// -1 weil Zählen (also der Index) bei 0 losgeht.
console.log("6.)", str[letzterIndexStr]);

// 7.)
console.log("7.)", str.length, typeof str.length);

// 8.)
let goals = 3;
let penalties = 3;
let injuries = 10;

console.log("8.)");
console.log(goals == penalties);
console.log(goals == injuries);
console.log(injuries == penalties);

console.log(typeof (goals == penalties));
console.log(typeof (goals == injuries));
console.log(typeof (injuries == penalties));
