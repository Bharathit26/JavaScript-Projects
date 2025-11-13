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

//if-else-if condition which accepts the string as input (Type) is 'Tier 1', 'Tier 2', 'Tier 3'
function companyType(type){
    if(type==='Tier 1'){
        console.log("Company pays 10 LPA");
    }
    else if(type==='Tier 2'){
        console.log("Company pays 7 LPA");
    }
    else if(type==='Tier 3'){
        console.log("Company pays 5 LPA");  
    }
    else{
        console.log("No Job Offer");    
    }
}
companyType('Tier 4'); //No Job Offer

//Switch case function
function comapanyTypeSwitch(type){
    switch(type){
        case 'Tier 1':
            console.log("Company pays 10 LPA");
            break;
        case 'Tier 2':
            console.log("Comapany pays 7 LPA");
            break;
        case 'Tier 3':
            console.log("Company pays 5 LPA");
            break;
        default:
            console.log("No Job Offer");
    }
}
comapanyTypeSwitch('Tier 2'); //Comapany pays 7 LPA

let type = 'Tier 3';
switch(type){
    case 'Tier 1':
        console.log("Company pays 10 LPA");
        break;
    case 'Tier 2':
        console.log("Comapany pays 7 LPA");
        break;
    case 'Tier 3':
        console.log("Company pays 5 LPA");
        break;
    default:
        console.log("No Job Offer");
}