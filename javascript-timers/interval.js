var $heading = document.querySelector('h1');

// function
var intervalSet;
function interval(){
  if ($heading.textContent === '4'){
    return $heading.textContent = '3';
  }
  function interval2() {
    if ($heading.textContent == '3') {
      $heading.textContent = '2';
    }
    function interval3() {
      if ($heading.textContent == '2') {
        $heading.textContent = '1';
      }
      function interval4() {
        if ($heading.textContent == '1') {
          $heading.textContent = '~Earth Beeeelooowww Us~';
        }
      }
      setInterval(interval4, 800);
    }
    setInterval(interval3, 800);
  }
  setInterval(interval2, 400);
}
intervalSet = setInterval(interval, 1000);
