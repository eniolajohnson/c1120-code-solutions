/* exported getKeys */
function getKeys(object){
  var keyArr = [];
  for (key in object){
    keyArr.push(key);
  }
  return keyArr;
}
