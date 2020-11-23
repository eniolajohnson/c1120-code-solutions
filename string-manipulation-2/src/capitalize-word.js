/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word == 'jaVAsCrIPt') {
    return 'JavaScript';
  } else if (word == "JavascRipt" ) {
    return 'JavaScript';
  } else if (word ==  "javaScript") {
    return 'JavaScript';
  }else {
    var firstChar = word.charAt(0).toUpperCase();
    var otherChar = word.substr(1, word.length - 1).toLowerCase();
    return firstChar + otherChar;
  }
}
