const number =3.14;
const numberInt=parseInt(number);
const numberFloat=parseFloat(number);
var third=numberFloat-numberInt;
third=third.toPrecision(2)

console.log(numberInt);
console.log(numberFloat);
console.log(third);