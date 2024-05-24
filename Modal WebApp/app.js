const modal = document.querySelector('.modal_card');
const overlay = document.querySelector('.overlay');


function openModal(eve){
    modal.classList.add('active');
    overlay.classList.add('overlayactive');
}

function closeModal(){
    modal.classList.remove('active');
    overlay.classList.remove('overlayactive');
}