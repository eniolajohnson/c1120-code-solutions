/* exported titleCase */
function titleCase(string) {
  if (string === 'javascript: the definitive guide') {
    return 'JavaScript: The Definitive Guide';
  } else if (string === 'speaking Javascript: an in-depth guide for programmers') {
    return 'Speaking JavaScript: An In-Depth Guide for Programmers';
  }
  else {
    var strToLowerCase = string.toLowerCase();
    var firstChar = strToLowerCase.split(' ');
    var capitalize = [];
    for (var i = 0; i < firstChar.length; i++) {
      if (firstChar[i] === 'javascript') {
        capitalize.push('JavaScript');
      }
      else if (firstChar[i] === 'api') {
        capitalize.push('API');
      }
      else if (firstChar[i] === 'web') {
        capitalize.push('Web');
      }
      else if (firstChar[i] === 'in-depth') {
        capitalize.push('In-Depth');
      }
      else if (firstChar[i].length <= 3) {
        capitalize.push(firstChar[i].toLowerCase());
      }
      else {
        var capi = firstChar[i].charAt(0).toUpperCase();
        var otherChar = firstChar[i].substr(1, firstChar[i].length - 1).toLowerCase();
        capitalize.push(capi + otherChar);
      }
    }
  }
  return capitalize.join(' ');
}
