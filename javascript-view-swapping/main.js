var $tabContainer = document.querySelector('.tab-container');
var $tabElements = document.querySelectorAll('.tab');
var $viewElements = document.querySelectorAll('.view');

function handleClick(event){
  if (event.target.matches('.tab')){
    for (var i = 0; i < $tabElements.length; i++){
      if ($tabElements[i] === event.target){
        $tabElements[i].classList.add('active');
      } else {
        $tabElements[i].classList.remove('active');
      }
    }
    var attribute = event.target.getAttribute('data-view');
    for (var i = 0; i < $viewElements.length; i++){
      var itemAttribute = $viewElements[i].getAttribute('data-view');
      if (itemAttribute === attribute){
        $viewElements[i].className = 'view';
      } else {
        $viewElements[i].className = 'hidden';
      }
    }
  }
}

$tabContainer.addEventListener('click', handleClick);
