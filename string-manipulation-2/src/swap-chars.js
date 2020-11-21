/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var strSplit = string.split('');
  var newArr = [];
  var firstString = strSplit[firstIndex];
  var secondString = strSplit[secondIndex];
  for (var i = 0; i < strSplit.length; i++) {
    if (i == firstIndex) {
      strSplit[i] = secondString;
    }
    if (i == secondIndex) {
      strSplit[i] = firstString;
    }
    newArr.push(strSplit[i]);
  }
  return newArr.join('');
}
