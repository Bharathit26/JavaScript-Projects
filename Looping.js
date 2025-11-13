/* It has 3 Types: 
-- while Loop: Executes the block of code as long as the condition is true 
-- do-while Loop: Executes the block of code once, and then repeats the loop as long as the condition is true
-- for Loop: Executes the block of code a specific number of times
 */

//while Loop
let count = 1;      
while(count <= 5){
    console.log("Count is: " + count);
    count++;
}

//do-while Loop
let num = 1;
do{
    console.log("Number is: " + num);
    num++;
}while(num <= 5);

//for Loop
for(let i=1; i<=5; i++){
    console.log("i is: " + i);
}

