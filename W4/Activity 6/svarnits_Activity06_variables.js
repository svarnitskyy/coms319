/*
Svyatoslav Varnitskyy
Fed 8th, 2023
Activity06 - Variables
*/

console.log("Acitivty06 -- Variables");

// Q1 : Is it permited the next ?
console.log("Q1 ---------------")
var var1 = "Iowa";
console.log(var1);
var var1 = 124;
console.log(var1);
// Is it permited ?
console.log("Yes or Not");

console.log("Yes! We can define the same variable multiple times");


// Q2 : Is it valid ?
console.log("Q2 ----------------");
let var2 = "Ames";
console.log(var2);
var2 = 124;
// Is it valid ?
console.log("Not, let does not allow to redefine");


// Q3 : Is it valid ?
console.log("Q3 ----------------");
let var3 = "ISU";
console.log(var3);
var3 = 2023;
console.log(var3);
console.log("Valid, yes here it is valid");


// Q4 : Explain the Error.
console.log("Q4 ----------------");
let var4;
const var5 = 0;
console.log("What's the error : a constant needs to be initialized")


// Q5 : Explain the Error.
console.log("Q5 ----------------");
const var6 = 3.1415;
//var6 = 2.8;
console.log("What's the error : it is not possible to chnage constant")


// Q6 : Explain the Error.
let firstName = "Abraham";
console.log(" Can't have space in variable name");
let numbers = [1, 2];
console.log("Can't have variable start with number");
let city_state = "Ames Iowa";
console.log("Can't have dash in variable name");


// Q7 : What !! ??
let mainCity = "DesMoines";
console.log("This is the Capital :", mainCity);
console.log("javaScript is case sensitive");

// Q8 : "let" and "const" scope vs "var" scope
if (5 === 5) {
    var var7 = 100;
}
console.log(var7);

if (5 === 5) {
    let var8 = 100;
}
//console.log(var8);
console.log("var has a scope which allows it to be used outside of a block while let can only be used within block")