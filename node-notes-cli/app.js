const create = require('./create');
const read = require('./read');
const update = require('./update');
const del = require('./delete');

const operator = process.argv[2];
const strIndex = process.argv[3];
const strOnly = process.argv[4];

switch (operator) {
  case 'create':
    create(strIndex);
    break;
  case 'read':
    console.log(read);
    break;
  case 'update':
    update(strIndex, strOnly);
    break;
  case 'delete':
    del(strIndex);
    break;
  default:
    console.log(`Invalid entry!`)
}
