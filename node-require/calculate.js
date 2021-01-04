const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const num1 = Number(process.argv[2]);
const define = process.argv[3];
const num2 = Number(process.argv[4])


if (define === 'plus'){
    const addition = add(num1, num2);
    console.log('result:', addition);
}
if (define === 'minus') {
  const subtraction = subtract(num1, num2);
  console.log('result:', subtraction);
}
if (define === 'times') {
  const multiplication = multiply(num1, num2);
  console.log('result:', multiplication);
}
if (define === 'over') {
  const division = divide(num1, num2);
  console.log('result:', division);
}
