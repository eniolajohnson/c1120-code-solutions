const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const grade in grades){
    gradesArray.push(grades[grade])
  }
  res.json(gradesArray);
})

app.post('/api/grades', (req, res) => {
  const newObject = req.body;
  let uid = nextId;
  newObject.id = nextId++;
  grades[uid] = newObject;
  res.send(grades[uid]);
  res.status(201);
})

app.listen(3000, ()=>{
  console.log('listening on port 3000');
})
