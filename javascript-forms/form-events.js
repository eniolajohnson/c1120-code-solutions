function handleFocus(event){
  console.log('Focus event fired!');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event){
  console.log('Blur event fired!');
  console.log('event.target.name', event.target.name);
}

function handleInput(event){
  console.log('event.target.name', event.target.name);
  console.log("The value of the event is", event.target.value);
}

var $name = document.querySelector('#user-name');
var $email = document.querySelector('#user-email');
var $message = document.querySelector('#user-message');

$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);

$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);

$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);
