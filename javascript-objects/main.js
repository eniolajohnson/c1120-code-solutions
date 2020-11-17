/* eslint-disable no-console, no-unused-vars, dot-notation */
var student = {
  firstName: "Eniola",
  lastName: "Johnson",
  age: 28
}

var fullName = student.firstName + " " + student.lastName;
console.log("Hi there, I'm a student of Learning Fuze and my name is ", fullName);
student.livesInIrvine = false;
student.previousOccupation = "Copywriter";
console.log("The value of livesInIrvine property is ", student.livesInIrvine);
console.log("In my previous job, I was a ", student.previousOccupation)
console.log("The value of student", student);


var vehicle = {
  make: "Ford",
  model: "Mustang",
  year: 2019
}
vehicle.color = 'black';
console.log("The color of the vehicle is ", vehicle.color);
vehicle.isConvertible = true;
console.log("Is the vehicle a convertible?", vehicle.isConvertible)
console.log("Here is my vehicle spec ", vehicle)


var pet = {
  name: "Sir Barks-A-Lot",
  type: "Chow Chow"
}
delete pet.name;
delete pet.type;
console.log('value of pet', pet);
