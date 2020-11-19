/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
// function getNumbersToTen() {
//   var numbers = [];
//   var currentNumber = 1;
//   for (var i = currentNumber; i < 11; i++){
//     numbers.push(i);
//   }
//   return numbers;
// }

// function getEvenNumbersToTwenty() {
//   var evenNumbers = [];
//   var currentNumber = 2;
//   for (var i = currentNumber; i < 21; i += 2) {
//     evenNumbers.push(i);
//   }
//   return evenNumbers;
// }

// function repeatWord(word, times) {
//   var count = 1;
//   var repeated = '';
//   for (var i = count; i <= times; i++) {
//     console.log(word);
//     repeated += word;
//   }
//   return repeated;
// }

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber < 11) {
    currentNumber ++;
    numbers.push(currentNumber);
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber < 21) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while( count <= times) {
    count++;
    repeated += word;
  }
  return repeated;
}

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++){
    console.log(string[i]);
  }
}

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++){
    var multiply = numbers[i] * 2;
    doubled.push(multiply);
  }
  return doubled;
  console.log(doubled);
}

function getKeys(object) {
  var keys = [];
  for (var property in object) {
    keys.push(property);
  }
  return keys;
}

function getValues(object) {
  var values = [];
  for (var property in object) {
    values.push(object[property]);
  }
  return values;
}
