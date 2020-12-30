var $pokemonImg = document.querySelectorAll('.hidden');
var $defaultImg = document.querySelector('.default');
var $backward = document.querySelector('button');
var $forward = document.querySelector('#forward');

var count = -1;
var timerID = null;
console.log($pokemonImg.length);

function updateImage() {
  count++;
  if (count < 5){
     var itemAttribute = $pokemonImg[count].getAttribute('src');
     $defaultImg.setAttribute('src', itemAttribute);
    console.log($pokemonImg[count]);

    $backward.addEventListener('click', function (e) {
      itemAttribute = $pokemonImg[count - 1].getAttribute('src');
      $defaultImg.setAttribute('src', itemAttribute);
    })

    $forward.addEventListener('click', function (e) {
      itemAttribute = $pokemonImg[count + 1].getAttribute('src');
      $defaultImg.setAttribute('src', itemAttribute);
    })
    } else {
      clearInterval(timerID);
    }
  // console.log($pokemonImg[count - 1])
  // console.log(itemAttribute);
}

timerID = setInterval(updateImage, 3000);

//     // console.log($defaultImg.getAttribute('src'));
// // console.log($pokemonImg[0].getAttribute('id'));
// function moveForward(){
//   var id = '0'
// }
