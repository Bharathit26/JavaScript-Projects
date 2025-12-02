//Topics:
// Callback, Promises, Callback hell

//important concept Callback: To handle asynchronous programming in a synchronous manner, we use callback, promises and  
//callback: It a procss of passing a function as a parameter. To decide the order of the execution of the program.


//Here the second function is executed first, instead of first, this is because program is running in asynchronous way
function One(callback){
    setTimeout(()=>{
        console.log("Example for Callback function");
        console.log("Function One executed");
        callback();
    }, 2000);
}

function Two(){
    console.log("Function Two executed\n");
}

//methods to call a function
One(Two);
/* One(()=>{
    Two();
}) */


//to add money function
function addMoney(value, callback){
    setTimeout(()=>{
        console.log("Example for Adding money callback function");
        console.log(`I have added money`, value);
        callback(value);
    }, 2000);
}

function displayBalance(value){
    console.log(`my current balance is:`, value ,"\n");
}

addMoney(10000, displayBalance);
//displayBalance();

//function to call the functions of api methods
function fetchData(callback){
    setTimeout(()=>{
        console.log("Example for API methods callback function")
        console.log("I am fetching the data");
        callback();
    }, 4000);
}

function arrangeData(callback){
    setTimeout(()=>{
        console.log("I am arranging the data");
        callback();
    }, 3000);
}

function displayData(){
    setTimeout(()=>{
        console.log("I am displaying the data\n");
    }, 2000);
}
 
//we use callback so the asynchronous programming converts to synchronous programming
fetchData(() => {
    arrangeData(() => {
        displayData();
    })
});

//without callback
// fetchData(); This methods are used to convert the asynch to sync
// arrangeData();
// displayData();


//callback hell: If the callback keeps increasing then, this is called as callback hell.

//promises: Promise is JavaScript object, which will either resolve or reject.(Success or failure).
// To handle callback hell, promises are used.

let lifeline = new Promise((resolve, reject) => {
    console.log("Example for Promise");
    let haveJob = true;
    if(haveJob){
        resolve("He/she got accepted");
    }else{
        reject("He/she got rejected");
    }
});
//then checks whether the method is resolved or not.
lifeline.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});


//Example two on promise
/* let myPromise = new Promise((resolve, reject) => {
    //sim
    setTimeout(() => {
        console.log("Example two on Promise");
        let 
    })
}) */

