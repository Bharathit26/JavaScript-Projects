let obj = {
    name: "David",
    sayhello: function(){
        console.log(`My name is ${this.name}`);
  }
}
obj.sayhello();
//The this keyword refers to the object that is executing the current function. In the above example, this refers to obj because sayHello is called as a method of obj.