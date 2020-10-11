const input = form.elements.searchInput;
input.addEventListener('focus', () => alert('focused'), false);
input.addEventListener('blur', () => alert('blurred'), false);
input.addEventListener('change', () => alert('changed'), false);

const form = document.forms['search'];
form.addEventListener ('submit', search, false);
function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}

//in order to allow the user to enter and use the search bar do following
input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);
input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);