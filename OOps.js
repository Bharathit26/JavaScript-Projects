//Class is a blueprint for creating objects with specific properties and methods., using class we can create multiple objects 
// with similar characteristics or different values for those characteristics.

//objecs are created using the class constructor, which are instance of a class.

class House{
    constructor(color, name){
        this.color = color;
        this.name = name;
    }
}
let value = new House("red", "MyHouse"); //object 1
console.log("Example for classes and objects");
console.log(value);

let final = new House("blue", "WhiteHouse"); //object 2
console.log(final, "\n");

//object is a non-primitive datatype that store multiple values in the form of key-value pairs. !important
class House1{ //parent class
    constructor(name){
        this.name = name;
        
    }
    //method
    myHouse(){
        console.log("Example for method and objects in class");
        console.log(`This is ${this.name}`);
    }
}
let home = new House1("Krishna House\n");  //object
home.myHouse();

//Inheritance: Inheritance is a mechanism where a new class (subclass or derived class) can inherit properties and methods from an existing class (superclass or base class).
// This allows for code reuse and the creation of hierarchical relationships between classes.
class Myhouse extends House1{ //subclass

}
let home1 = new Myhouse("Inherited House\n");
console.log("Example for Inheritance");
home1.myHouse();

//overloading: Method overloading is a feature in object-oriented programming that allows a class to have multiple methods with the same name but different parameter lists (different types or number of parameters).

    class DrivingLicense{
        isEligible(name, age){
            if(age==undefined || age<18){
                console.log("Example for Method Overloading");
                console.log(`you are not eligible for a driving license`);
            }else{
                console.log("Eligible for a driving license\n");
            }
        }
    }
    let value5 = new DrivingLicense();
    value5.isEligible("Ravi");
    value5.isEligible("Ravi", 20);

//overriding: Method overriding is a feature in object-oriented programming that allows a subclass to provide a specific implementation of a method that is already defined in its superclass.

class Bank1 {
    bankBalance(){
        console.log("Example for Method Overriding");
        console.log("The bank balance is: 10000 \n");
    }
}

class AxisBank extends Bank1{
    bankBalance(){
        console.log("I have a balance in Axis");
    }
}
let value6 = new Bank1();
value6.bankBalance();

//polymorphism: Polymorphism is a core concept in object-oriented programming that allows objects of different classes to be treated as objects of a common superclass. It enables a single interface to represent different underlying forms (data types).
//Polymorphism allows methods to do different things based on the object it is acting upon, even though they share the same name.
//different forms of functions/methods is called polymorphism
class Mobile{
    buyProduct(){
        console.log("Example for Polymorphism");
        console.log("Buying a product");
    }
}
class Apple extends Mobile{
    buyProduct(){
        console.log("Buying an Apple product");
    }
}
class Samsung extends Mobile{
    buyProduct(){
        console.log("Buying a Samsung product\n");
    }
}
let value1 = new Mobile();
value1.buyProduct();
let value2 = new Apple();
value2.buyProduct();
let value3 = new Samsung();
value3.buyProduct();

// # is the symbol which makes the variable private to the class only, we can't access it directly, hence we create a function to access it.
//Encapsulation: Trying to access private data from outside the class will result in an error.
//Encapsulation is one of the fundamental principles of object-oriented programming (OOP) that focuses on restricting direct access to an object's data and methods.
// It involves bundling the data (attributes) and methods (functions) that operate on that data into a single unit, typically a class, and controlling access to that data through public methods.
class Bank{
    #balance;
    constructor(balance){
        this.#balance = balance;
    }
    bankBalance(){
        console.log("Example for Encapsulation");
        console.log(`The bank balance is: ${this.#balance}\n`);
    }
}
let value4 = new Bank(5000);
value4.bankBalance();
//console.log(value4.#balance); //error: private field

//using super keyword: It is used to call the inheritance methods, it connects with the parent class and gets the required information.
class Bank2{
    constructor(name){
        this.name= name;
    }
}
class Bob extends Bank2{
    constructor(name, city){
        super(name);
        this.city = city;
    }
}
let value7 = new Bob("Bank of Baroda", "Bangalore" );
console.log("using super keyword");
console.log(value7);