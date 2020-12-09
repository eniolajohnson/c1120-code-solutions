/* exported Student */
function Student(firstName, lastName, subject){
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;
}

Student.prototype.getFullName = function getFullName(firstName, lastName) {
  var fName = this.firstName + ' ' + this.lastName;
  return fName;
};
Student.prototype.getIntroduction = function getIntroduction (firstName, lastName, subject) {
  var introduction = `Hello, my name is ${this.firstName} ${this.lastName} and I am studying ${this.subject}.`
  return introduction;
}
