let text1 = "JavaScript string methods";

// Length of the string
console.log("Length of the string: " + text1.length);

//character at a specific index
console.log(text1.charAt(7)); // Character at index 7

let text2 = "Web Development";
// Addition of two strings
let result = text1 + text2;
console.log(result); // Concatenated string

// Using concat() method
let combinedText = text1.concat(", ", text2);
console.log("Using concat(): " + combinedText);

//reverse()
let text = "Bangalore";
//console.log(text.reverse());
console.log(text.split(''));

let textng = 'I am in Bangalore';
console.log(textng.split(' ')); //single space
console.log(textng.split('  ')); //double space
console.log(textng.split(" ").reverse()); //reverse
console.log(textng.split(" ").reverse().join(" ")); //join after reverse
console.log(textng.split('').join('')); //join without space
