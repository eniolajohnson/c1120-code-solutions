const fs = require('fs');

function create(str) {
  const contents = require('./data.json');
  const file_content = fs.readFileSync('data.json');
  const json = JSON.parse(file_content);
  const id = json.nextId;
  const notes = json.notes
  notes[id] = str;

  let data = JSON.stringify(json, null, 2);

  fs.writeFile('data.json', data, (err) => {
    if (err) throw err;
  });
  return '';
}
module.exports = create;
