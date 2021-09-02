//Operador de reposo
const obj = {
    name: 'Seba',
    age: 38,
    country: 'UY'
}

let {name, ...all} = obj;
console.log(all);

const obj1 = {
    height: 1.74,
    ...obj
}

console.log(obj1);

//Bloque finally
const helloWorld = () => {
    return new Promise((resolve,reject)=>{
        (true)
        ? resolve('Hello World')
            : reject(new Error("Test error"))
    });
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(()=> console.log("Finalizó"))


//Bloques regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);