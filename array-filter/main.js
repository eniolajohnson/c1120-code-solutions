const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(number => number > 0 && number % 2 === 0);
console.log('The even numbers in the array are:', evenNumbers);

const overFive = numbers.filter(number => number > 5);
console.log('The numbers greater than 5 in the array are:', overFive);

const startWithE = names.filter(name => name.startsWith('E'));
console.log('These names', startWithE, 'begin with letter "E" in the names array');

const haveD = names.filter(name => name.includes('D') || name.includes('d'));
console.log('These names', haveD, 'include or begin with letter "d" in the names array');
