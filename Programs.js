//write a javascript program to print * 
console.log('Program to print *');

//program to print * using repeat()
for(let i=1;i<=5;i++){
    console.log('* '.repeat(i));
}

//program to print * using i and j
console.log('Program to print * using i and j');
for(let i=1;i<=5;i++){
    let text = '';
    for(let j=1;j<=i;j++){
        text = text + ' *';
    }
    console.log(text);
}

//one more method
console.log('One more method to print *');
for(let i=1;i<=5;i++){
    let text = '*';
    for(let j=1;j<i;j++){
        text = text + ' *';
    }
    console.log(text); //prints 
}

console.log('Print 5 * in each row');
for(let i=1;i<=5;i++){
    let text = '*';
    for(let j=1;j<5;j++){
        text = text + ' *';
    }
    console.log(text); //prints 5 * in each row
}

//print * in reverse order
console.log('Print * in reverse order in increasing order');
for(let i=1; i<=5; i++){
    let text = '';
    for(let j=5; j>=i; j--){
        text = text + ' *';
    }
    console.log(text); //prints decreasing * in each row
}


console.log('Print 5 * in each row');
for(let i=5; i>=1; i--){
    let text = '';
    for(let j=5; j>=1; j--){
        text = text + ' *';
    }
    console.log(text); //prints 5 * in each row
}

//print * in reverse order with decreasing count
console.log('Print * in reverse order with decreasing count');
for(let i=5; i>=1; i--){
    let text = '';
    for(let j=1; j<=i; j++){
        text = text + ' *';
    }
    console.log(text); //prints decreasing * in each row
}

//array
console.log('Array creation in JavaScript');
let array = [10,20,30,40,50];
let data = new Array(60,70,80,90,100);
console.log(array);
console.log(data);
data.push(110);
console.log(data);
data.pop();
console.log(data);