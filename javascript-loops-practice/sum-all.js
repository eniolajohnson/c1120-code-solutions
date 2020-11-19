/* exported sumAll */
function sumAll(numbers) {
  var eachNum = 0;
  for(var i = 0; i < numbers.length; i++) {
    eachNum += numbers[i];
  }
  return eachNum;
}
