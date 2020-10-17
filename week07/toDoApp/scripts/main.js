const todo = {};



//add an item to the list
const addForm = document.forms['addItem'];
form.addEventListener('add', add, false);

function add(){
    todo.id = Date.now();
    todo.content = addform.addInput.value;
    todo.completed = false; 
}
