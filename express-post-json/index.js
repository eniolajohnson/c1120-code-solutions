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
  const studentGrade = req.body;
  let uid = nextId;
  studentGrade.id = nextId++;
  grades[uid] = studentGrade;
  res.status(201).send(studentGrade);
})

app.listen(3000, ()=>{
  console.log(`listening on port 3000`);
})
