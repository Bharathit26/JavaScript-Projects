/* Variants of function in JavaScript
-- Function Declaration
-- Function Expression */


// Function Declaration
function greet(){
    console.log("Hello there!");
}
greet(); // Calling the function to execute

// Function Expression
var sayGoodbye = function(){
    console.log("Goodbye!");
}
sayGoodbye(); // Calling the function to execute

// Function with parameters
function greet(welcomeMessage){
    console.log("We are pleased to have you" + welcomeMessage);
}
greet(" Ms Noelle!"); // Calling the function with an argument

// Function with return value
function welcome(name){
    return "Welcome " + name + " to our community!";
}
let message = welcome("Noelle");
console.log(message);

// Function to add two numbers with return value
function add(a, b){
    return a + b;
}
console.log("The sum is: " + add(5, 10));

//Function to add two numbers without return value
function sum(x, y){
    console.log("The sum is: " + (x + y));
}
sum(7, 3);

//Function to multiply two numbers
function mul(a,b){
    //console.log("The product of two numbers is: " + (a*b));
    return a*b;
}
let value = mul(26,5);
console.log("The product of two numbers is: " + value);