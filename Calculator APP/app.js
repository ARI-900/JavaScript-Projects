let str = '';

let btns = document.querySelectorAll('button');
let result = document.getElementById('result');

btns.forEach((btn) => {

    btn.addEventListener('click', (e) => {
       
        try{

            let temp = e.target.innerText;

        if(temp === '=') {
            const res = eval(str);
            str = res;
            result.value = res;
        }

        else if(temp === 'AC') {
            str = '';
            result.value = str;
        }

        else if(temp === 'DEL'){
            str = str.slice(0, str.length - 1);
            result.value = str;
        }
        
        else{

            if(temp === 'x') {
                str += '*';
            }
            else{
                str += temp;
            }
            result.value = str;
        }

        }
        catch(err) {
            alert("Error");
        }
       
    })
})