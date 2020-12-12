var $images = document.getElementsByTagName('img');
var count = 0;
var timerID = null;

function change(){
  for (var i = 0; i < $images.length; i++){
    var imgAttr = Number($images[i].getAttribute('class'));
    if (imgAttr === i) {
      $images[i].className = 'show';
      return $images[i];
    } else {
      $images[i].className = 'hidden';
  }
    }
}

// timerID = setInterval(change, 3000)
