/* exported zip */
function zip(first, second){
 var newArr = [];
  var newLength = first.length;
  for (var i = 0; i < newLength; i++){
    var firstPos = first.shift();
    var secondPos = second.shift();
    if (secondPos === undefined){
      continue;
    } else {
      newArr.push(Array(firstPos, secondPos));
    }
  }
  return newArr;
}
