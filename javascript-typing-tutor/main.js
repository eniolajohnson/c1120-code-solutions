var log = document.querySelector('h2');
// console.log($text);
// console.log('grumpy');

document.addEventListener('keydown', logKey);

function logKey(event) {
  // log.textContent += ` ${e.code}`;
  var logSplit = log.textContent.split('');
  for (var i = 0; i>logSplit; i++){
    if (logSplit[i] === event.key){
      logSplit[i].style.color = 'green';
    }
  }
  console.log(event.key);
}
