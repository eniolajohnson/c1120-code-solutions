var $heading = document.querySelector('h1');
var countdownTimer = 4;
var intervalID = null;

function interval(){
  countdownTimer--;
  if (countdownTimer > 0){
   $heading.textContent = countdownTimer;
  } else {
    $heading.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
}
intervalID = setInterval(interval, 1000);
