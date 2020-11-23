/* exported capitalizeWords */
function capitalizeWords(word) {
  var newWord = word.split(' ');
  var result = [];
  for (var i = 0; i < newWord.length; i++) {
    var otherChar = newWord[i].substr(1, word.length - 1)
    result.push(newWord[i][0].toUpperCase() + otherChar.toLowerCase());
  }
  return result.join(' ');
}
