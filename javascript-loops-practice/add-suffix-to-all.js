/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var suffixAddedArr = [];
  for (var i = 0; i < words.length; i++){
    var suffixAdded = words[i] + suffix;
    suffixAddedArr.push(suffixAdded);
  }
  return suffixAddedArr;
}
