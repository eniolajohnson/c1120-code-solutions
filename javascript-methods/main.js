var red = 4;
var blue = 98;
var white = 56;

var maximumValue = Math.max(red, blue, white);
console.log("The maximum value is", maximumValue);

var heroes = ['Wolverine', 'Superman', 'Wonder Woman', 'Elastigirl'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log("For now, the index is at ", randomIndex);
var randomHero = heroes[randomIndex];
console.log("My favorite cartoon hero is ", randomHero)

// Array Methods
var library = [
  {
    title: "Harry Potter and the Deathly Hallows",
    author: "JK Rowlings",
  },
  {
    title: "Lord of the Rings Trilogy",
    author: "J.R. Tolkien",
  },
  {
    title: "Children of Blood and Bone",
    author: "Tomi Adeyemi",
  }
]

var lastBook = library.pop();
console.log("The last book is", lastBook);

var firstBook = library.shift();
console.log("The first book is", firstBook);

var jsBook = library.push({
  title: "JavaScript and JQuery",
  author: "Jon Duckett"});

var cssBook = library.unshift({
  title: "HTML and CSS",
  author: "Jon Duckett"});

library.splice(1, 1);

console.log("The value of library is ", library)

// String Methods
var fullName = "Eniola Johnson";
var firstAndLastName = fullName.split(' ');
console.log("The value of first and last name is", firstAndLastName)

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
