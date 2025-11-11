{
    let name = "David";
    console.log(name);
}
//console.log(name); // This will throw an error because 'name' is not defined outside the block
 
{
    var name = "Michael";
    console.log(name);
}
console.log(name); // This will work because 'var' is function-scoped

{
    const name="Sarah";
    console.log(name);
}
console.log(name); // This will throw an error because 'name' is not defined outside the block

 
/* -- let and const have block scope, meaning they are only accessible within the block they are defined in.
we can't access block scoped variables outside the block.
-- var is  a function scoped variable */