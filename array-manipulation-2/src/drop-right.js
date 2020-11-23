/* exported dropRight */
function dropRight(array, count) {
  var newArr = [...array];
  var lastIndex = newArr.length - count;
  return newArr.slice(0, lastIndex);
}
