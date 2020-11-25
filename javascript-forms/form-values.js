var $theForm = document.querySelector('#contact-form');

var elements = $theForm.elements;

function handleSubmit(e){
  e.preventDefault();
  var messageData = {
    name: elements.name.value,
    email: elements.email.value,
    message: elements.message.value,
  }

  console.log(messageData);
  $theForm.reset();
}

$theForm.addEventListener("submit", handleSubmit);
