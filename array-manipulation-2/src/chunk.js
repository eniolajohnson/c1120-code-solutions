/* exported chunk */
// function chunk(array, size){
//   var newArr = [...array];
//   var nestedArr = arr.splice(size);
//   console.log(nestedArr);
// }

function chunk(array, size) {
  var newArr = [...array];
  var nestedArr = [];
  var returnedArr = []
  nestedArr.push(newArr.slice(0, size));
  nestedArr.push(newArr.slice(size, size + size));
  nestedArr.push(newArr.slice(size + size, (size + size) + size));
  nestedArr.push(newArr.slice((size + size) + size, (size + size) + (size + size)));
  nestedArr.push(newArr.slice((size + size) + (size + size), (size + size) + (size + size) + size));
  nestedArr.forEach(element => {
    if (element.length !== 0) {
      returnedArr.push(element)
    }
  });
  return returnedArr;
}
