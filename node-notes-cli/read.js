const fs = require('fs');

const contents = fs.readFileSync("data.json", "utf8");
const contentsJSON = JSON.parse(contents);
const contentsNotes = contentsJSON.notes;

let result = [];

for (const key in contentsNotes) {
  var stringy = `${key}: ${contentsNotes[key]}`;
  result.push(stringy);
}

const finalResult = result.join('\n');

module.exports = finalResult;
