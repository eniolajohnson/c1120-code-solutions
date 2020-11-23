/* exported omit */
function omit(source, keys) {
  var newObj = { ...source };
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] in newObj) {
      delete newObj[keys[i]];
    }
  }
  return newObj;
}
