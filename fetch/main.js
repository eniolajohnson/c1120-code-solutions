fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data =>  console.log("data:",data))
  .catch(error => console.error('Fetch failed!'))

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(response => response.json())
  .then(data => {
    return console.log('data:', data)
  })
  .catch(error => console.error('Fetch failed!', error))
