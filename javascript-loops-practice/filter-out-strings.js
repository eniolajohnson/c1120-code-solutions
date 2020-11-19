/* exported filterOutStrings */
function filterOutStrings(values) {
  var valuesExceptStringsArr = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof(values[i]) !== typeof('')) {
      valuesExceptStringsArr.push(values[i]);
    }
  }
  return valuesExceptStringsArr;
}
