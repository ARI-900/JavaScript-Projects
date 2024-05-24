const menuBar = document.querySelector('#menu');
const slidebar = document.querySelector('#mySlide');
const closeBar = document.querySelector('.closeBtn');


menuBar.addEventListener('click', () => {
    // function statement
    slidebar.style.width = "25%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.7)";
});

closeBar.addEventListener('click', () => {
    slidebar.style.width = "0%";
    document.body.style.backgroundColor = "";
    
});