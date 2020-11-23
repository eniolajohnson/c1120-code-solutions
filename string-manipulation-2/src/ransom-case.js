/* exported ransomCase */

function ransomCase(word) {
  var newWord = word.split('');
  var result = '';
  for (var i = 0; i < newWord.length; i++) {
    if (i % 2 === 1) {
      result += newWord[i].toUpperCase();
    }
    if (i % 2 === 0) {
      result += newWord[i].toLowerCase();
    }
  }
  return result;
}
