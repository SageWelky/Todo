let formContent = document.querySelector('.form');
let domModal = document.querySelector('.modal');
let modalButton = document.querySelector('.modal-test');
let submitButton = document.querySelector('.test-submit');
//formContent.innerHTML =  ``;

modalButton.addEventListener( "click", (event) => {
  domModal.classList.add('open');
});

submitButton.addEventListener( "click", (event) => {
  domModal.classList.remove('open');
});
