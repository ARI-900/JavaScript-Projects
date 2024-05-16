const bdy = document.querySelector('#body');
const logo = document.getElementById('icon');

logo.addEventListener('click', (e)=> {
    
    bdy.classList.toggle('active');
    if(bdy.className === 'active') {
        logo.className = 'fa-solid fa-sun';
        document.querySelector('#navSection').style.boxShadow = "0px 0px 5px 2px white" ;
        document.querySelector('.heroText p').style.color= "white";
    
    }
    else {
        logo.className = 'fa-solid fa-moon';
        document.querySelector('#navSection').style.boxShadow = "";
        document.querySelector('.heroText p').style.color= "";
    
    }

});