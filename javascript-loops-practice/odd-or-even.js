/* exported oddOrEven */
function oddOrEven(numbers) {
  var oddOrEvenArr = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddOrEvenArr.push('even');
    } else {
      oddOrEvenArr.push('odd');
    }
  }
  return oddOrEvenArr;
}
// function oddOrEven(numbers) {
//   var oddOrEvenArr = [];
//   for (var i = 0; i < numbers.length; i++){
//     if (numbers[i] % 2 === 0) {
//       oddOrEvenArr.push('even');
//     }
//     if (numbers[i] % 2 === 1) {
//       oddOrEvenArr.push('odd');
//     }
//     if (typeof(numbers[i]) !== typeof(1)) {
//       oddOrEvenArr.push('Not a number');
//     }
//   }
//   return oddOrEvenArr;
// }

// function oddOrEven(numbers) {
//   var oddOrEvenArr = [];
//   for (var i = 0; i < numbers.length; i++) {
//     var result = numbers[i] % 2 === 0 ? 'even' : 'odd';
//     oddOrEvenArr.push(result);
//   }}
