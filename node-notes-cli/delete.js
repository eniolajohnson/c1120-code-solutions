const fs = require('fs');

function del(index) {
  const contents = require('./data.json');
  const notes = contents.notes;
  delete notes[index];

  let data = JSON.stringify(contents, null, 2);

  fs.writeFile('data.json', data, (err) => {
    if (err) throw err;
  });
  return '';
}

module.exports = del;
