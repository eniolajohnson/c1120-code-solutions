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

const sum = numbers.reduce((acc, currValue) => {
  return acc += currValue
}, 0)
console.log('sum:', sum);

const product = numbers.reduce((acc, currValue) => {
  return acc *= currValue
}, 1)
console.log('product:', product);

const balance = account.reduce((acc, curr) => {
  if (curr.type === 'deposit') {
    acc += curr.amount
  } else if (curr.type === 'withdrawal') {
    acc -= curr.amount
  }
  return acc;
}, 0)

console.log('balance:', balance)

const composite = traits.reduce((acc, curr) => {
  Object.assign(acc, curr);
  return acc;
}, {})

console.log('composite', composite)
