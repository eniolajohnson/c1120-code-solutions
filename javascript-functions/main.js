function convertMinutesToSeconds(num){
  var secs = num * 60;
  return secs;
}
var num = 2;
var convertMinutesToSecondsResult = convertMinutesToSeconds(num);
console.log("The result of converting " + num + " minutes into seconds is ", convertMinutesToSecondsResult);

function greet(name) {
  var greetings = 'Hey, ' + name;
  return greetings;
}
var greetResult = greet('Eniola');
console.log("The value of greet is ", greetResult);

function getArea(width, height) {
  var multiply = width * height;
  return multiply;
}
var getAreaResult = getArea(7, 25);
console.log("The value of getArea is ", getAreaResult);

function getFirstName(person) {
  return person.firstName;
}
var jediMaster = {
  firstName: 'Luke',
  lastName: 'Skywalker'
}
var getFirstNameResult = getFirstName(jediMaster);
console.log("The Jedi Master's first name is ", getFirstNameResult);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  return array[lastIndex];
}
var powerPuffGirls = ['Bubbles', 'Buttercup', 'Blossom']
var getLastElementResult = getLastElement(powerPuffGirls);
console.log("The last person in the Power Puff Girls array is ", getLastElementResult);
