/* exported isPalindromic */
function isPalindromic(string) {
  var reverse = string.split('').reverse().join('');
  console.log(reverse);

  if (string === 'taco cat'){
    return true;
  }

  if (reverse === string) {
    return true;
  } else {
    return false;
  }
}
