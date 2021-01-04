const fs = require('fs');

fs.readFile(Buffer.from(process.argv[2]), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
})
