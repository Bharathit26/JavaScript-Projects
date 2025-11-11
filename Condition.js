//if function
function isEligible(value){
    if(value>=18){
        console.log("Eligible to vote");
    }
}
isEligible(20); //Eligible to vote

//if-else function
function checkEvenOdd(num){
    if(num%2==0){
        console.log("Even Number");
    }
    else{
        console.log("Odd Number");
    }   
}
checkEvenOdd(7); //Odd Number

//if-else-if function
function gradeScore(score){
    if(score>=90){  
        console.log("Grade A");
    }
    else if(score>=75){
        console.log("Grade B");
    }
    else if(score>=50){
        console.log("Grade C");
    }
    else{
        console.log("Fail");
    }
}
gradeScore(85); //Grade B