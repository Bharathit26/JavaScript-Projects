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

// //print * in reverse order
// console.log('Print * in reverse order in increasing order');
// for(let i=1; i<=5; i++){
//     console.log("* ", repeat(i).reverse());
// }

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

//factorial in JavaScript for Bangalore

//sum of two index values in array
let number = [1, 2, 3, 4, 5];
let final = 5;
let value = [];
//console.log(number.length);
console.log("Sum of two index values in array");
for(let i=0; i<number.length; i++){
    for(let j=i+1; j<number.length; j++){
        if(number[i] + number[j] == final){
           // console.log('The index values are: ' + i + ', ' + j);
            value.push([i, j]);
        }  
    }
}
console.log(value);

//Plantation Program output in the form of boolean
let array1 = [1, 0, 0, 0, 1];
let n = array1.length;
let count =0;
for(let i=0; i<n ; i++){
    if(array1[i] == 0){
        if((i==0 || array1[i-1]==0) && (i==n-1 || array1[i+1]==0)){
            array1[i] = 1;
            count++;
        }
    }
}
console.log("Number of plants that can be planted: " + count);
console.log(array1);

//Another way to print 0s in the array
let array2 = [1, 0, 0, 0, 0, 0, 1];
let tree = 2;
let count1 = 0;
for (let i=0; i<array2.length; i++){
    if(array2[i] == 0){
       // console.log(array2[i]);
       let prevValue = array2[i-1];
       let nextValue = array2[i+1];
       if(prevValue == 0 && nextValue == 0){
            array2[i] = 1;
            count1++;
       }
    }
}
console.log(tree == count1);

//here previous value is not available
let array3 = [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1];
let tree1 = 4;
let count2 = 0;
for (let i=0; i<array3.length; i++){
    if(array3[i] == 0){
       // console.log(array2[i]);
       let prevValue = (i==0) ? 0 : array3[i-1];
       let nextValue = (i==array3.length - 1) ? 0 : array3[i+1];
       if(prevValue == 0 && nextValue == 0){
            array3[i] = 1;
            count2++;
       }
    }
}
console.log(tree1 == count2);

