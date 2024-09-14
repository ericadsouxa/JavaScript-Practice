// Arithmetic Operator

var num1 =7;
var num2 = 5;

console.log (num1 + num2);

var answer = num1<num2;

console.log("Is num1 less than num2 : ",(answer));


console.log (num1 - num2);
console.log (num1 * num2);
console.log (num1 / num2);
console.log (num1 % num2);


//--------------------------------------------------------------------------//
// Assignment Operator
var sellingPrice = 190;
var listPrice = 270;
var discount = (listPrice - sellingPrice) / listPrice * 100;
console.log("Discount : "+ discount);

displaydiscountPercentage = Math.round(discount);

console.log("Discount : "+ displaydiscountPercentage + "%"); // % symbol is used to display the percentage

var result = listPrice > sellingPrice;

console.log( result);

console.log(typeof(result)); // typeof operator is used to check the data type of a variable.
