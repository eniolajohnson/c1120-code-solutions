/* exported difference */
function difference(first, second) {
  var array = [...first, ...second];
  var newArray = [... new Set(array)];
  console.log(newArray);
  var arr1 = [];
  var arr2 = [];
  for (var i = 0; i < array.length; i++) {
    if (arr1.includes(array[i])) {
      arr2.push(array[i]);
    }
    arr1.push(array[i]);
  }
  for (var i = 0; i < newArray.length; i++) {
    if (newArray[i] == (arr2[i])) {
      newArray.splice(i, 1);
      i++;
    }
  }
  return newArray;
}
// function difference(first, second) {
//   var array = [...first, ...second];
//   var arr1 = [];
//   var arr2 = [];
//   for (var i = 0; i < array.length; i++) {
//     if (arr1.includes(array[i])) {
//       arr2.push(array[i]);
//     }
//     arr1.push(array[i]);
//   }
//   for (var i = 0; i < arr1.length; i++) {

//     if (arr1[i].includes(arr2[i])) {
//       arr1.splice(i, 1);
//       i--;
//     }
//   }
//   console.log(arr1);
// }
