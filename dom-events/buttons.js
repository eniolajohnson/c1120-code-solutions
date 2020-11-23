//Click Event
function handleClick(event){
  console.log("button clicked");
  console.log(event);
  console.log(event.target);
}

var $clickBtn = document.querySelector('.click-button');
$clickBtn.addEventListener('click', handleClick);

// Mouseover EVent
function handleMouseOver(event){
  console.log("button hovered");
  console.log(event);
  console.log(event.target);
}

var $hoverBtn = document.querySelector('.hover-button');

$hoverBtn.addEventListener('mouseover', handleMouseOver);

//Double-Click Event
function handleDoubleClick(event) {
  console.log("button double-clicked");
  console.log(event);
  console.log(event.target);
}

var $dblClickedBtn = document.querySelector('.double-click-button');

$dblClickedBtn.addEventListener('dblclick', handleDoubleClick);
