const obj = {
    name: "David",
    city: "America",
}

const {name, city} = obj;
console.log(name);
console.log(city);


const person = { name1: "John", city1: "Australia", age : 30};
const {name1, city1, age} = person;
console.log(name1);
console.log(city1);
console.log(age);
JSON.stringify(person); //object to string

let value = JSON.stringify(person);
JSON.parse(value) //string to object