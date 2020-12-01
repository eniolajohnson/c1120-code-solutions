var $body = document.querySelector('body');
var $phrase = document.querySelectorAll('span');

var count = 0;

function handleKeydown(event){
  if ($phrase[count].textContent === event.key){
    $phrase[count].style.color = 'green';
    $phrase[count].classList.add('text');
    console.log($phrase[count]);
    count++;
  } else{
    $phrase[count].style.color = 'red';
    $phrase[count].classList.add('line-red');
  }

  // $phrase[count].classList.remove('text');

}

$body.addEventListener("keydown", handleKeydown)
