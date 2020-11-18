/* exported getLastCharacter */
function getLastCharacter(string) {
  var strSplit = string.split("");
  var lastIndex = strSplit.length - 1;
  var lastChar = strSplit[lastIndex];
  return lastChar;
}
