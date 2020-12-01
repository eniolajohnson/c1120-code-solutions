/* exported reverseWords */
function reverseWords(string) {
  var firstStrReverse = string.split('').reverse();
  var secondStrReverse = firstStrReverse.join('').split(' ').reverse();
  var finalModification = secondStrReverse.join(' ');
  return finalModification
}
