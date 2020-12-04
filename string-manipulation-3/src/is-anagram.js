/* exported isAnagram */
function isAnagram(str1, str2) {
  var strSplit1 = str1.split('').sort().join('').trim();
  console.log(strSplit1);
  var strSplit2 = str2.split('').sort().join('').trim();
  if (strSplit1 === strSplit2) {
    return true;
  } else {
    return false;
  }
}
