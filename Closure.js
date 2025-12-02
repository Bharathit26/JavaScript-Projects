//The closure is created when the inner function is defined within the outer function. that is to access the inner function 
// after its outer function has finished recuting, the function must return the inner function, hence this creates a closure.

/* function outerFunction(outerVariable){
    return function innerFunction(innerVariable){
        console.log("Outer Variable: " + outerVariable);
        console.log("Inner Variable: " + innerVariable);
    }
}

const newFunction = outerFunction("outside");
newFunction("inside"); */


function speedingsystem(){
    let speed = 0;
   return function accelerate(){
        speed += 10;
        console.log("speed is: " + speed);
    }   
}
let car = speedingsystem();
car();
car();