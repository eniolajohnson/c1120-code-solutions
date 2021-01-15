const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = account.reduce((acc, currValue) => {
  return acc += currValue.amount
}, 0)
console.log('sum:', sum);

const product = account.reduce((acc, currValue) => {
  return acc *= currValue.amount
}, 1)
console.log('product:', product);

const deposit = account.reduce((acc, curr) => {
  if (curr.type === 'deposit') {
    acc += curr.amount
  }
  return acc;
}, 0)

const withdrawal = account.reduce((acc, curr) => {
  if (curr.type === 'withdrawal') {
    acc += curr.amount
  }
  return acc;
}, 0)

const balance = deposit - withdrawal;
console.log('balance:', balance)

const composite = traits.reduce((acc, curr) => {
  Object.assign(acc, curr);
  return acc;
}, {})

console.log('composite', composite)



