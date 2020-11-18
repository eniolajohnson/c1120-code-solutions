/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var sentence = person.name + " " + "is a " + person.occupation + " from " + person.birthPlace + '.';
  return sentence;
}
