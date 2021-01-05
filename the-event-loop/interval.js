let nIntervId;
let count = parseInt(3);

function start() {
  nIntervId = setInterval(countdown, 1000);
}

function countdown() {
  console.log(count);
  if (count > 1) {
    count--;
  } else{
    console.log('Blast off!');
    clearInterval(nIntervId);
  }
}
start();
