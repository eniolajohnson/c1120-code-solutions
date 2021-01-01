var $pokemonImg = document.querySelectorAll('img.hidden');
var $defaultImg = document.querySelector('.default');
var $backward = document.querySelector('.button');
var $forward = document.querySelector('#forward');
var $circles = document.querySelectorAll("i.far.fa-circle");
var $fill = document.querySelector('#fill');
console.log($circles);

var count = -1;
var timerID = null;
let firstC = $circles[0],
  secondC = $circles[1],
  thirdC = $circles[2],
  fourthC = $circles[3],
  fifthC = $circles[4];

function updateImage() {
  count++;
  if (count < 5){
     var itemAttribute = $pokemonImg[count].getAttribute('src');
     $defaultImg.setAttribute('src', itemAttribute);
    // console.log($pokemonImg[count]);

    $backward.addEventListener('click', function (e) {
      itemAttribute = $pokemonImg[count - 1].getAttribute('src');
      $defaultImg.setAttribute('src', itemAttribute);
    })

    $forward.addEventListener('click', function (e) {
      itemAttribute = $pokemonImg[count + 1].getAttribute('src');
      $defaultImg.setAttribute('src', itemAttribute);
    })

    $circles.forEach(circle => {
      circle.addEventListener('click', function(e){
        if (e.target === $circles[0]){
          var newItemAttribute = $pokemonImg[0].getAttribute('src');
          $defaultImg.setAttribute('src', newItemAttribute);
          e.target.className = 'fas fa-circle';
          $circles[1].className = "far fa-circle";
          $circles[2].className = "far fa-circle";
          $circles[3].className = "far fa-circle";
          $circles[4].className = "far fa-circle";
        } else if (e.target === $circles[1]) {
          var newItemAttribute = $pokemonImg[1].getAttribute('src');
          $defaultImg.setAttribute('src', newItemAttribute);
          e.target.className = 'fas fa-circle';
          $circles[0].className = "far fa-circle";
          $circles[2].className = "far fa-circle";
          $circles[3].className = "far fa-circle";
          $circles[4].className = "far fa-circle";
        } else if (e.target === $circles[2]) {
          var newItemAttribute = $pokemonImg[2].getAttribute('src');
          $defaultImg.setAttribute('src', newItemAttribute);
          e.target.className = 'fas fa-circle';
          $circles[0].className = "far fa-circle";
          $circles[1].className = "far fa-circle";
          $circles[3].className = "far fa-circle";
          $circles[4].className = "far fa-circle";
        } else if (e.target === $circles[3]) {
          var newItemAttribute = $pokemonImg[3].getAttribute('src');
          $defaultImg.setAttribute('src', newItemAttribute);
          e.target.className = 'fas fa-circle';
          $circles[0].className = "far fa-circle";
          $circles[1].className = "far fa-circle";
          $circles[2].className = "far fa-circle";
          $circles[4].className = "far fa-circle";
        } else if (e.target === $circles[4]) {
          var newItemAttribute = $pokemonImg[4].getAttribute('src');
          $defaultImg.setAttribute('src', newItemAttribute);
          e.target.className = 'fas fa-circle';
          $circles[0].className = "far fa-circle";
          $circles[1].className = "far fa-circle";
          $circles[2].className = "far fa-circle";
          $circles[3].className = "far fa-circle";
        }
      })
    })
    } else {
      clearInterval(timerID);
    }
}

timerID = setInterval(updateImage, 3000);

//     // console.log($defaultImg.getAttribute('src'));
// // console.log($pokemonImg[0].getAttribute('id'));
// function moveForward(){
//   var id = '0'
// }
