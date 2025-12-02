//Object in JavaScript is a collection of properties, and a property is an association between a name (or key) and a value. A value of a property can be a function, in which case the property is known as a method. 
// Objects are used to store various keyed collections and more complex entities.:
// Object is a Non-primitive data type.
//It is used to store multiple values in a single variable.
//Oject is Key-Value pair data structure.
//Object is mutable in nature.
//Object can be created by using Object() constructor or by using {} (object literal) syntax.

//syntax for Object
//let object1 = {}; //object literal syntax
//let obj = new Object(); //Object() constructor

let board = {
    name: "white Board",
    color: "white",
    isAvailable: true,
    write: function(text){
        console.log("Writing on the board: " + text);
    }
}

//accesing the object properties
console.log(board.name);
console.log(board.color);
console.log(board.isAvailable);
board.write("Hello World");


let employees = {
    id: [101,102,103,104],
    name: ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"],
    department: "IT",
    phone: ["123-456-7890","987-654-3210","555-666-7777","888-999-0000"],
    dateofjoining: "2022-01-15",
    salary: 60000,
}
console.log(employees.id);
console.log(employees.name);
console.log(employees.department);
console.log(employees.phone);
console.log(employees.dateofjoining);
console.log(employees.salary);

let mobile = {
    brand: "Samsung",
    model: "Galaxy S21",
    color: ["Phantom Gray"," Phantom White", "Phantom Violet"],
    storage: "128GB",
    camera: "64MP",
    price: 120000,
}
console.log(mobile);
mobile.description = "This is a flagship smartphone from Samsung."; //adding new property to object called description
console.log(mobile);

//for in loop
/* let person = {
    name = "John";
    email = "john@gmail.com"
}

for(let key in person){
    console.log(`property ${key} value ${person[key]}`);
} */

let response = [
    {
        name: "iphone",
        company: "apple",
    },
    {
        name: "iphone",
        company: "apple",
    },
    {
        name: "galaxy 26",
        company: "Samsung",
    },
    {
        name: "nord",
        company: "One plus"
    },
]
let finalarray=[];
console.log(response.length);

//console.log(finalarray.company); not working
for(i=0; i<response.length; i++){
    if(response[i].company == "apple"){
        finalarray.push(response[i]);
    }
}
console.log(finalarray);


//to print the keys of the object
let obj = {
    name : "iphone",
    comapny : "apple",
    price : "5662626",
}
console.log(Object.keys(obj)); //prints keys 
console.log(Object.keys(Object));

//assigning the different object to the existing project: here the name gets overwritten to galaxy
let obj2 = {
    name: "galaxy",
    model: 17,
}
console.log(Object.assign(obj, obj2));

//Hoisting: Moving declarations or functions to the top, by doing this the function will be available for all the code

console.log("Using function declaration"); //where hoisting can be achieved
abc(); //function
function abc(){
console.log("function");
}
// abc(); //function

//function expression
console.log("using function expression"); //where hoisting ca't be achieved
// abc1(); //we cant call the function from above but can call it from below
let abc1 = function(){
console.log("function");
} 
abc1();

{
    var name = "david"; //let name = "david";
    console.log(name);
}
console.log("david");


//Type conversion: 
// Two types: implicit:
console.log(10 + "10");
console.log(10 - "10");
console.log(10 * "2"); //implicity string get converted to number if the operand is not + (addition)
console.log(10 / "10");
//  explicit: we need to call the classes or the objects for type conversion: specifically giving the command to convert to that particular type.
console.log(Number("123"));
console.log(String(123));
console.log(Boolean("123"));
console.log(Boolean("")); //empty string to get false

//Temperal dead zone

//console.log(a); //can't access before initialization
let a = 10;
console.log(a); //can access after initialization

//arrow functions
/* Arrowfunction const abc=()=>{
  console.log("arrow function");
}
abc(); */

//if logic is a single line specifically dont have to return statement we can write in this way also
/* const sum = (a,b) => {
    a + b;
}
sum(5,10); */

