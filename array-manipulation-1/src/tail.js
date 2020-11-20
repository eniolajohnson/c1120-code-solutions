/* exported tail */
// function tail(array) {
//   var value = array[0];
//   for (var i = 0; i < array.length; i++){
//     if ( i === array.indexOf(value));
//   }
// }

// function tail(array) {
//   var value = array[0];
//   var result = array.filter(function (arrItem, index) {
//     console.log(arrItem[index]);
//     console.log(arrItem);
//     console.log(index);
//     // return arrItem[index] !== array.indexOf(value)
//   })
function tail(array) {
  var result = array.filter(function (arrItem, index) {
    return index !== 0;
  })
  return result;
}
