/* exported getValues */
function getValues(object) {
  var valuesArr = [];
  for (key in object) {
    valuesArr.push(object[key]);
  }
  return valuesArr;
}
