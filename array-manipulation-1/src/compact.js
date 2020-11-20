/* exported compact */
function compact(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

// function compact(array) {
//  var result = array.filter(arrItem => Boolean(arrItem) === true);
//   return result;
// }
