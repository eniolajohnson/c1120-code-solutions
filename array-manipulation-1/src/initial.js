/* exported initial */
function initial(array){
  var result = array.filter(function (arrItem, index) {
    return index !== array.length - 1;
  })
  return result;
}
