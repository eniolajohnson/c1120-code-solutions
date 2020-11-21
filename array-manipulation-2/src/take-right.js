/* exported takeRight */
function takeRight(array, count) {
  var newArr = [...array];
  var firstIndex = newArr.length - count;
  return newArr.slice(firstIndex, newArr.length);
}
