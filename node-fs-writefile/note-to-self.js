const fs = require('fs');

fs.writeFile('note.txt', process.argv[2], 'utf8', (err, data) => {
  if (err){
    console.error(err);
  }
})
