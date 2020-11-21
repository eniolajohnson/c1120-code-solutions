/* exported truncate */
function truncate(length, string) {
  var result = string.substr(0, length) + '...';
  return result;
}
