/* exported isAnagram */
function isAnagram(str1, str2) {
  var strSplit1 = str1.split('').sort().join('').trim();
  var strSplit2 = str2.split('').sort().join('').trim();
  strSplit1 === strSplit2 ? console.log(true) : console.log(false);
}
