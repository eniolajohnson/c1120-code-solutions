const express = require('express');
const app = express();

const path = require('path');

const pathName = path.join(__dirname, 'public')

const expressStatic = express.static(pathName);

app.use(expressStatic);

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
