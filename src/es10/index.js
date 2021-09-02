//Array Flat

let array = [1,2,3,[1,2,3,[1,2,3]]];

console.log(array.flat());

let arrayMapeado = [1,2,3,4,5];
console.log(arrayMapeado.flatMap(value=> [value,value*2]));

//Trim
const helloStart = "     hello";
const helloEnd = "hello     ";
console.log(helloStart.trimStart());
console.log(helloEnd.trimEnd());

//FromEntries

let entries = [["name","Seba"],["age",37]];
console.log(Object.fromEntries(entries));

//Symbol
let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);