/* exported drop */
function drop(array, count) {
  var newArr = [...array];
  var lastIndex = newArr.length - count;
  return newArr.slice(count, newArr.length);
}
