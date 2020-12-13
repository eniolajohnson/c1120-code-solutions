var $pokemonImg = document.querySelectorAll('.hidden');
var $defaultImg = document.querySelector('.default');
var count = 5;
var timerID = null;

function updateImage() {
  count--;
  if (count > -1){
     var itemAttribute = $pokemonImg[count].getAttribute('src');
     $defaultImg.setAttribute('src', itemAttribute);
    // console.log($defaultImg.getAttribute('src'));
    } else {
    $defaultImg.setAttribute('src', './images/001.png');
      clearInterval(timerID);
    }
}

timerID = setInterval(updateImage, 3000);
