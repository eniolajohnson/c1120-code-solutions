const express = require('express');
const app = express();

let nextId = 1;
const grades = [];

app.use(express.json());

app.get('/api/grades', (req, res) => {
  res.json(grades);
})

app.post('/api/grades', (req, res) => {
  const anonObject = req.body;
  anonObject.id = nextId++;
  grades.push(anonObject);
  res.send(anonObject)
  res.status(201);
})

app.listen(3000, ()=>{
  console.log('listening on port 3000');
})

