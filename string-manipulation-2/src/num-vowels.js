/* exported numVowels */
function numVowels(string){
  var strSplit = string.split('');
  var count = 0;
  for (var i = 0; i < strSplit.length; i++){
    if (strSplit[i] === 'a') {
      count += 1;
    } else if (string[i] === 'e') {
      count += 1;
    } else if (string[i] === 'i') {
      count += 1;
    } else if (string[i] === 'o') {
      count += 1;
    } else if (string[i] === 'u') {
      count += 1;
    } else if (string[i] === 'A') {
      count += 1;
    } else if (string[i] === 'E') {
      count += 1;
    } else if (string[i] === 'I') {
      count += 1;
    } else if (string[i] === 'O') {
      count += 1;
    } else if (string[i] === 'U') {
      count += 1;
    } else {
      count;
    }
  }
  return count;
}
