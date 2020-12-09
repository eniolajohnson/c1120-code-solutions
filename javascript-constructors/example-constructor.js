function ExampleConstructor(){

}

console.log('The value of ExampleConstructor is ', ExampleConstructor.prototype);
console.log('The type of ExampleConstructor\'s prototype is ', typeof(ExampleConstructor.prototype));

var anExample = new ExampleConstructor();
console.log('The value of anExample is ', anExample);

var isInstanceOf = anExample instanceof ExampleConstructor;
console.log('The value of isInstanceOf is ',  isInstanceOf);
