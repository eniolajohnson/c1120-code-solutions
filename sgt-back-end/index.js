const express = require('express');
const app = express();

const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
})


app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades";
  `;

  db.query(sql)
    .then(result => {
      const grades = result.rows;
        res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
})


app.post('/api/grades', (req, res) => {
  const newInput = req.body;

  if (!newInput || !newInput.name || !newInput.course || !newInput.score) {
    res.status(400).json({
      error: `new grade must include 'name', 'course', 'score' keys and appropriate values`
    });
    return;
  }

  const sql = `
    insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *
  `;

  const params = [newInput.name, newInput.course, newInput.score]

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with 'gradeId' ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
})

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  const inputValue = req.body;

  if (!inputValue || !inputValue.name || !inputValue.course || !inputValue.score || Number(inputValue.score) <= 0 && Number(inputValue.score) > 100) {
    res.status(400).json({
      error: `new grade must include 'name', 'course', 'score' keys and their values`
    });
    return;
  }


  const sql = `
    update "grades"
    set "name" = $2,
    "course" = $3,
    "score" = $4
    where "gradeId" = $1
    returning *
  `;


  const params = [gradeId, inputValue.name, inputValue.course, inputValue.score]

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with 'gradeId' ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
})



app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }

  const sql = `
    delete from "grades"
     where "gradeId" = $1
     returning *
  `;
  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with 'gradeId' ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
})

app.listen(3000, () => {
  console.log(`Listening on port 3000!`)
})
