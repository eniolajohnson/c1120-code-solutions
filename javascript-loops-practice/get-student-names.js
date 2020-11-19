/* exported getStudentNames */
function getStudentNames(students){
  var nameArr = [];
  for (var i = 0; i < students.length; i++){
    var name = students[i].name;
    nameArr.push(name);
  }
  return nameArr;
}
