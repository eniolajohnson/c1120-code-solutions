const express = require('express');
const app = express();
const fs = require('fs');

const content = require('./data.json');
const notes = content.notes;
let nextId = 10;

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const apiArray = [];
  for (note in notes){
    apiArray.push(notes[note]);
  }
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

  if (newNote.content){
    notes[uid] = newNote;
    newNote.id = nextId++;
    let data = JSON.stringify(content, null, 2);

    fs.writeFile('data.json', data, (err) => {
      if (err) {
        return res.status(500).json({ 'error': 'Unexpected Server Error' });
      };
      res.status(201).json(newNote);
    });
  } else {
    res.status(400).json({ "error": "content is a required field" })
  }
})

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const idNum = parseInt(id);

  if (idNum < 0 || !Number.isInteger(idNum)){
    res.status(400).json({
      "error": "id must be a positive integer"
    })
  } else if (!notes[id]){
      res.status(404).json({
        "error": `cannot find note with id ${id}`
      })
  } else {
    delete notes[id];

    let data = JSON.stringify(content, null, 2);

    fs.writeFile('data.json', data, (err) => {
      if (err) {
        return res.status(500).json({ 'error': 'Unexpected Server Error' });
      }
      res.sendStatus(204);
    });
  }
})

app.put('/api/notes/:id', (req, res)=>{
  const id = req.params.id;
  const contentEdit = req.body;

  if (parseInt(id) < 0 || !Number.isInteger(parseInt(id))) {
    res.status(400).json({
      "error": "id must be a positive integer"
    })
  } else if(!contentEdit.content){
    res.status(400).json({
      "error": "content is a required field"
    })
  } else if (!notes[id]){
    res.status(404).json({
      "error": `cannot find note with id ${id}`
    })
  } else {
    notes[id] = contentEdit;
    contentEdit.id = id;

    let data = JSON.stringify(content, null, 2);

    fs.writeFile('data.json', data, (err) => {
      if (err) {
        return res.status(500).json({ 'error': 'Unexpected Server Error' });
      }
      res.status(200).json(notes[id]);
    });
  }
})

app.listen(3000, () => {
  console.log(`Listening on port 3000!`)
})
