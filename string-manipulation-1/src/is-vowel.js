/* exported isVowel */
function isVowel(char) {
  var vowels = "aieouAIEOU";
  if (vowels.includes(char)){
    return true;
  } else {
    return false;
  }
}
