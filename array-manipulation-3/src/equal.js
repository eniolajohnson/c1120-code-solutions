/* exported equal */
function equal(first, second) {
  var firstArr = first.join(' ');
  var secondArr = second.join(' ');
  if (firstArr === secondArr) {
    return true;
  }
  return false;
}
