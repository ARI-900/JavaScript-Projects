

// Accessibility
const btn = document.getElementById('search-btn');
const input = document.getElementById('search');


async function fetchAPI(value) {

    const url = `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${value}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6d7745f491msheeb4a11b49eebe0p105e00jsn4d473629d8e8',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        
        let word = result?.word;
        let desc = result?.definition;

        desc.slice(18);

        // operation
        input.value = "";
        document.getElementById('word').value = word;
        document.getElementById('desc').innerText = desc;

        
        
    } catch (error) {
        console.error(error);
    }
}



// seach btn event listeners
btn.addEventListener('click', (e) => {
    e.preventDefault();

    fetchAPI(input.value);
    
    
});
