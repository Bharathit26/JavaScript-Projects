/* It has 3 types in JavaScript: Arithmetic, Assignment, Comaprison Operators

// Arithmetic Operators
+, -, *, /, %

// Assignment Operators
=, +=, -=, *=, /=, %=

// Comparison Operators
==, ===, !=, !==, >, <, >=, <=
 */
// Example of Arithmetic Operators
let a=10;
a+=10; //a = a + 10
console.log("The value of a after addition is: " + a); //20

let b=15;
b-=5; //b = b - 5
console.log("The value of a after subtraction is: " + b);//

let c=8;
c*=2; //c = c * 2
console.log("The value of a after multiplication is: " + c); 

let d=20;
d/=5; //d = d / 5
console.log("The value of a after division is: " + a);

a%=3; //a = a % 3
console.log("The value of a after modulus is: " + a); //0

// Example of Comparison Operators
/* ==: It compares the value
===: it compares value with datatype */

console.log(10==10); //true
console.log(10===10); //true
console.log(10!=5); //true
console.log(10!==5); //true
console.log(10>5); //true
console.log(5<10);  //true  
console.log(10=="10"); //true
console.log(10==="10"); //false
console.log(10>=10);   //true
console.log(5<=10);    //true   


//Logical Operators
/* Logical operators are used to combine multiple conditions/expressions and return a boolean value (true or false) based on the evaluation of those conditions.
&& (Logical AND): Returns true if both operands are true.
|| (Logical OR): Returns true if at least one of the operands is true.
! (Logical NOT): Returns true if the operand is false, and vice versa. */
let x = 10;
let y = 5;
console.log((x > 5) && (y < 10)); //true
console.log((x < 5) || (y < 10)); //true
console.log(!(x > 5)); //false
console.log(!(y < 10)); //false

//Ternary Operator
/* The ternary operator is a concise way to write conditional statements in JavaScript. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. The syntax for the ternary operator is as follows:
condition ? expressionIfTrue : expressionIfFalse */
let age = 18;
let eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log(eligibility); //Eligible to vote    
// Example 2
let number = 7;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(result); //Odd
// Example 3
let marks = 85;
let grade = (marks >= 90) ? "A" :
            (marks >= 80) ? "B" :
            (marks >= 70) ? "C" :
            (marks >= 60) ? "D" : "F";
console.log("Grade: " + grade); //Grade: B

//spread operartor: used to concat the objects.
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let output = [...array1, ...array2];
console.log(output);


//if the objects in array4 has different value as for example b:4, then array3 that is the value of b will be overridden.
let array3 = {a:1, b:2};
let array4 = {c:3, d:4};

let output1 = {...array3, ...array4};
console.log(output1); 