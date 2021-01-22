console.log('pet');

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(console.error('Fetch failed!'))

fetch('https://pokeapi.co/api/v2/pokemon/1').then(response => response.json()).then(data => console.log(data)).catch(console.error('Fetch failed!'))
