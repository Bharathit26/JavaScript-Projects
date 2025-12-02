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

let color = ['black', 'grey', 'orange', 'blue', 'yellow'];
console.log(color.indexOf('orange')); //2
console.log(color.lastIndexOf('blue')); //3
console.log(color.sort()); //sorted array
console.log(color.sort().reverse()); //reverse sorted array
console.log(color.shift()); //removes first element
console.log(color.unshift('white')); //adds element at first position
console.log(color.push('pink')); //adds element at last position
console.log(color.pop()); //removes last element

//splice()
/* splice(): It removes the elements starting from the given start index and removes the 
number of elements specified and also adds the new elements at that position. */

//let value = color.splice(1, 2); //removes 2 elements from index 1
let value = color.splice(1, 2, 'purple', 'cyan'); //removes 2 elements from index 1 and adds 'purple' and 'cyan'
console.log(value);
console.log(color);

//concat()
let color1 = ['yellow'];
let key = ['honda'];
let value1 = color1.concat(key);
console.log(value1);

let color2 = ['green', 'yellow'];
console.log(color2[0]); //green
console.log(color2[1]); //yellow
for(let i=0; i<color2.length; i++){
    console.log(color2[i]);
}        


//write a JavaScript program to find largest word in the string with length
let string = 'I am attending JavaScript classes at Besant Technologies';
//console.log(string.length);
//console.log(string.split(' '));
let words = string.split(' ');
//console.log(words);
console.log(words.length); //number of words 8
let largest = '';
//console.log(largest.length);
for(let i=0; i<words.length; i++){
    if(words[i].length > largest.length){
        largest = words[i];
    }
}
console.log('Largest word is: ' + largest + ' with length ' + largest.length);

//Template Literals: 
let name = "David";
let city = "New York";      
let message = `Hello, my name is ${name}. I live in ${city}.`;
console.log(message); // Hello, my name is David. I live in New York.

