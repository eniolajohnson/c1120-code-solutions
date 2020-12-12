var $pageHeading = document.querySelector('h1');

function greet(){
  var greet = "Hello There";
  $pageHeading.textContent = greet;
  return pageHeading;
}

setTimeout(greet, 2000);
