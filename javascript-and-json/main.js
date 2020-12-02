var books = [
  {
    "isbn": 001,
    "title": 'Harry Potter and the Chamber of Secrets',
    "author": 'J.K. Rowlings'
  },
  {
    "isbn": 002,
    "title": "JavaScript and JQuery",
    "author": 'Jon Duckett'
  },
  {
    "isbn": 003,
    "title": "HTML and CSS",
    "author": 'Jon Duckett'
  }
]

console.log("The books are", books);
console.log("Type of 'books' is", typeof (books));

var jsonBooks = JSON.stringify(books);
console.log("The JSONed books are", jsonBooks);
console.log("Type of 'JSONed books' is", typeof (jsonBooks));

var student = '{"numberID":987, "name":"Brian Bert"}';

console.log('The student is', student);
console.log("Type of student is", typeof(student));

var studentParsed = JSON.parse(student);

console.log('The parsed student is', studentParsed);
console.log("Type of parsed student is", typeof(studentParsed));
