/* exported capitalize */
function capitalize(word){
  var upperCased = word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
  return upperCased;
}
