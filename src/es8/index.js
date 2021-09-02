//Object.entries
const team = {
    frontend: 'Sammy',
    backend: 'Lucio',
    design: 'Peter'
}

const entries = Object.entries(team);
console.log(entries);

//Cantidad de elementos en el object team
console.log(entries.length);

//Object.values
const values = Object.values(team);
console.log(values);

//Pad
const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,' ---'));


//Async-Await
const helloWorld = () => {
    return new Promise((resolve,reject) => {
        (true)
            ? setTimeout( () => resolve('Hello World'),3000)
            : reject(new Error('Test Error'))
        }
    )
}

const helloAsync = async () => {
    try {
        const hello = await helloWorld();
    } catch(error){
        console.log(error);
    }
}

helloAsync();
