const myfaqs = document.querySelectorAll(".accordian");

myfaqs.forEach(myfaq => {
    

    const icon = myfaq.querySelector('.fa-solid');   // access icons
    const answer = myfaq.querySelector('.answer');      //accessing answer div
    
    myfaq.addEventListener('click', ()=>{
        // icon.classList.toggle('activeI');
        // answer.classList.toggle('activeA');  // bad approach

        if(icon.classList.contains("activeI")){
            
            icon.classList.remove("activeI");
            answer.style.maxHeight = null;

        }else{

            icon.classList.add("activeI");
            answer.style.maxHeight = answer.scrollHeight + "px";

        }
        
    });
});