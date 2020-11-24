var counter = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', clickHandler)

function clickHandler(event) {
  counter += 1;
  $clickCount.textContent = `Clicks: ${counter}`;
  if (counter < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (counter < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (counter < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (counter < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (counter < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}
