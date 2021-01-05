/* exported student */
var student = {
  firstName: 'Eniola',
  lastName: 'Johnson',
  subject: 'Javascript',
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function() {
    var intro = 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
    return intro;
  }
}
