const takeAChance = require('./take-a-chance');

const firstName = takeAChance("Ada");


firstName.then((value) => {
  console.log(value);
});

firstName.catch((error) => {
  console.error(error.message);
});
