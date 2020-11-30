/* exported flatten */
function flatten(array) {
  var firstArr = [];
  for (var i = 0; i < array.length; i++){
    if (Array.isArray(array[i])){
      for (var j = 0; j < array[i].length; j++) {
        firstArr.push(array[i][j]);
      }
    } else {
      firstArr.push(array[i])
    }
  }
  return firstArr;
}

// function flatten(array) {
//   var firstArr = array.join(',');
//   if (typeof(array[0]) === typeof(1)){
//     return Number(firstArr.split(',');)
//   }
//   return firstArr.split(',');
// }

// function flatten(array){
//   var firstArr = array.join(',');
//   return firstArr.split(',');
// }
