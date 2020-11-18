/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var firstName = person.firstName;
  var firstNameSplit = firstName.split('');
  var lastName = person.lastName;
  var lastNameSplit = lastName.split('');
  var initials = firstNameSplit[0] + lastNameSplit[0];
  return initials;
}
