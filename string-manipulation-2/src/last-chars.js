/* exported lastChars */
function lastChars(length, string) {
  if (length > string.length){
    return string;
  } else {
    var starters = string.length - length;
    var end = string.length;
    var result = string.substr(starters, end);
    return result;
  }
}
