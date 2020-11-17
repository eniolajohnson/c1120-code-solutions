/* eslint-disable no-console */

var width = 5;
var height = 7;

var area = width * height;
console.log("The value of area is ", area);
console.log("The type of area is ", typeof (area));

var bill = 20;
var payment = 100;
var change = payment - bill;
console.log("The value of change is ", change);
console.log("The type of change is ", typeof (change));

var quizzes = 10,
  midTerm = 30,
  final = 60,
  grade = (quizzes + midTerm + final) / 3;
console.log("The value of grade is ", grade);
console.log("The type of grade is ", typeof (grade));

var fullName = "Eniola Johnson";
console.log("Hi, my full name is ", fullName);
console.log("The type of full name is ", typeof (fullName));

var pH = 12;
var isAcidic = pH < 7;
console.log("Is the pH acidic?", isAcidic);
console.log("The type of isAcidic is ", typeof (isAcidic));

var headCount = 450;
var isSparta = 450 === 300;
console.log("Was Maximus Meridius a Spartan?", isSparta);
console.log("The type of isSparta is ", typeof (isSparta));

var motto = fullName + " is the GOAT!"
console.log("Who's the GOAT?! ", motto);
console.log("The type of motto is ", typeof (motto));
