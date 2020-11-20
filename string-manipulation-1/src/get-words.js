/* exported getWords */
function getWords(string) {
  if (string === '') {
    return [];
  }
  var splitStr = string.split(' ');
  return splitStr;
}
