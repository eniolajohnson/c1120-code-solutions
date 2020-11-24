var $openModalButton = document.querySelector('button');
var $closeModal = document.querySelector('div.close-modal');
var $closeModalButton = document.querySelector('.form button');

function handleOpenModal(){
  $closeModal.classList.remove('close-modal');
  $closeModal.classList.add('close-modal-reverse');
}

function handleCloseModal() {
  $closeModal.classList.add('close-modal');
}

$openModalButton.addEventListener('click', handleOpenModal);
$closeModalButton.addEventListener('click', handleCloseModal);
