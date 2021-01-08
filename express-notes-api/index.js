const express = require('express');
const app = express();

const content = require('./data.json');
const notes = content.notes;
let nextId = 3;

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const apiArray = [];
  for (note in notes){
    apiArray.push(notes[note]);
  }
  console.log('running');
  res.json(apiArray);
});

app.get('/api/notes/:id', (req, res) => {
  const idProp = parseInt(req.params.id);

  if (idProp < 0 || !Number.isInteger(idProp)) {
    res.status(400).json({ 'error': 'id must be a positive integer' });
  } else if (!notes[idProp]){
    res.status(404).json({ 'error': `cannot find note with id ${idProp}` });
  } else {
    res.json(notes[idProp]);
  }
});

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  let uid = nextId;


  if (JSON.stringify(newNote) === '{}'){
    res.status(400).json({ "error": "content is a required field" })
  } else if (req.body) {
    notes[uid] = newNote;
    newNote.id = nextId++;
    res.json(newNote);
  } else {
    res.status(500).json({ "error": "An unexpected error occurred." })
  }
})

app.listen(3000, () => {
  console.log(`Listening on port 3000!`)
})
