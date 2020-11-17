var colors = ['red', 'white', 'blue'];
console.log("The first color in the array is ", colors[0]);
console.log("The second color in the array is ", colors[1]);
console.log("The third color in the array is ", colors[2]);

var americanColors = "America is " + colors[0] + ', ' + colors[1] + ", and " + colors[2];
console.log(americanColors);

colors[2] = 'green';
var mexicanColors = "Mexico is " + colors[0] + ', ' + colors[1] + ", and " + colors[2];
console.log(mexicanColors);

console.log("The colors in the array are ", colors);


var students = ['Bernie', 'John', 'Jack', 'Jill'];
numberOfStudents = students.length;
console.log("There are ", numberOfStudents, " students in the class.");
var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex]
console.log("The last student in the array is ", lastStudent);
console.log("The students in the array are ", students);
