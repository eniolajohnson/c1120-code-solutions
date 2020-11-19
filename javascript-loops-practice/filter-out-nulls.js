/* exported filterOutNulls */
function filterOutNulls(values) {
  var valuesExceptNullArr = [];
  for(var i = 0; i < values.length; i++){
    if (values[i] !== null){
      valuesExceptNullArr.push(values[i]);
    }
  }
  return valuesExceptNullArr;
}
