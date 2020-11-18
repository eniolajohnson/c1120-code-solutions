/* exported getFirstInitialOfPerson */
function getFirstInitialOfPerson(person) {
  var firstName = person.firstName;
  var firstNameSplit = firstName.split('');
  return firstNameSplit[0];
}
