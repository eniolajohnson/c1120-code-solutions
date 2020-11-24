var $body = document.querySelector('body');
var $extraHalo = document.querySelector('div');
var $bulb = document.querySelector('p');



function handleClick(event){
  if ($body.className === 'body-active'){
    $body.classList.remove('body-active');
  } else {
    $body.classList.add("body-active");
  }
  if ($extraHalo.className === 'extra e-active') {
    $extraHalo.classList.remove('e-active');
  } else {
    $extraHalo.className = "extra e-active";
  }
  if ($bulb.className === 'bulb bulbBase b-active') {
    $bulb.classList.remove('b-active');
  } else {
    $bulb.className = "bulb bulbBase b-active";
  }
}


$bulb.addEventListener('click', handleClick);
