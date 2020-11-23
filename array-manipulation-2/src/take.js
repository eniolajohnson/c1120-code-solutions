/* exported take */
function take(array, count) {
  var newArr = [...array];
  return newArr.slice(0, count);
}
