/* exported unique */
function unique(array){
  var newArr = [... new Set(array)];
  return newArr;
}
