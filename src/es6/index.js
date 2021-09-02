function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
}

//es6
// Default params
function newFunction2(name = 'oscar', age = 32, country = "MX"){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo','23','CO');

//Template literals
var hello = "Hello";
var world = "World";
var epicPhrase = `${hello} ${world}`;

//String with multiple lines
let lorem = `Lorem ipsum sabium
verte torus rifoldi.
`;

//Destructuring
let person = {
    name: "Osvaldo",
    age: 32,
    country: 'UR'
}

let {name, age, country} = person;
console.log(name);

//Spread Operator
let coloresPrimarios = ["azul", "rojo", "amarillo"];
let coloreSecundarios = ["verde","naranja","violeta"];
let todos = [...coloresPrimarios,...coloreSecundarios];
console.log(todos);

//
let nombre = 'Ale';
let edad = 28;
let persona = {nombre, edad};
console.log(persona);

//Promise
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey');
        } else {
            reject('Ups!!');
        }

    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log("hola"))
    .catch(error => console.log(error));


// Classes
class Calculator{
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();

console.log(calc.sum(1,2));


//Modules
//import { hello } from './module';

//hello();


function* fibonacci() {
    var a = yield 1;
    yield a * 2;
}

//Generators
var it = fibonacci();
console.log(it);          // "Generator {  }"
console.log(it.next());   // 1
console.log(it.next());   // 1
/*
console.log(it.send(10)); // 20
console.log(it.close());  // undefined
console.log(it.next());   // throws StopIteration (as the generator is now closed)

 */