function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isTrue = false;
                if (isTrue){
               resolve("I am fetching the data");
                }else{
                reject("Failed, not able to fetch the data!");
            }
        }, 4000);
    });
}

function arrangeData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am arranging the data");
        }, 3000);
    });
}

function displayData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am displaying the data");
        }, 2000);
    });
}
 
// writing a promise
fetchData()
    .then((message) => {
    console.log(message);
    return arrangeData();
})
.then((message) => {
    console.log(message);
    return displayData();
})
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
});

