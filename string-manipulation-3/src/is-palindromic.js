/* exported isPalindromic */
function isPalindromic(string) {
  var reverse = string.split('').reverse().join('');
  if (reverse === string) {
    return true;
  }
  return false;
}
