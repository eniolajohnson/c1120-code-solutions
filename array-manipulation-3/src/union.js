/* exported union */
function union(first, second) {
  var array = [...first, ...second];
  var newArr = [... new Set(array)];
  return newArr;
}
