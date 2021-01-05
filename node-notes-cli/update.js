const fs = require('fs');

function update(index, str) {
  const contents = require('./data.json');
  const notes = contents.notes;
  notes[index] = str;

  let data = JSON.stringify(contents, null, 2);

  fs.writeFile('data.json', data, (err) => {
    if (err) throw err;
  });
  return '';
}

module.exports = update;
