const fs = require('fs');

fs.readFile('/dijkstra', (err, data) => {
  if (err) throw err;
  console.log(data);
});
