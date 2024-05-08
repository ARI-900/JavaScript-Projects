let counter = document.getElementById('counter');

let x;
function call(value) {
    
    if(value === 1){
        x = parseInt(counter.textContent);
        x = x+1;
        counter.textContent = x;
    }
    else{
        x = parseInt(counter.textContent);
        x = x-1;
        counter.textContent = x;
    }

    
}
