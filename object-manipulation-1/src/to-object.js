/* exported toObject */
function toObject(keyValuePair){
  var anonObj = {};
  var key = keyValuePair[0];
  var value = keyValuePair[1];
  anonObj[key] = value;
  return anonObj;
}
