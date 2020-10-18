
//get the list array ready
//create the todo object
var toDoList = new Array();
const todo = {id: Date.now(), content: "Default Task", completed:false};
todo.complete = function(){
    if(todo.completed == false){todo.completed = true;}
    else{todo.completed = false;}
}
toDoList.push(todo);

//add an item to the list
const addForm = document.forms['addItem'];
addForm.addEventListener('add', add, false);

//add function
function add(){
    const newToDo = {}
    newToDo.id = Date.now();
    newToDo.content = addform.addInput.value;
    newToDo.completed = false;
    newToDo.complete = function(){
        if(newToDo.completed == false){newToDo.completed = true;}
        else{newToDo.completed = false;}
    }
    toDoList.push(newToDo);
    display();
}

function checkIt(i){
        var idVal = "todo"+i;  
        var checked = document.getElementById(idval).value;
        if (checked == true){
            toDoList[i].complete();
            document.getElementById(idval).style.textDecoration = "line-through";
        }else{
            toDoList[i].complete();
            document.getElementById(idval).style.textDecoration = "none";

        }
        display();
    }

//display the toDo list
function display(){

    var list = document.getElementById("toDoList")
    
    list.innerHTML += '<form>';
    //dynamic menu
    for (let i = 0; i <= toDoList.length; i++)
     {
         list.innerHTML += '<input type = "checkbox" id ="todo'
         + i
         + 'onclick="checkIt('
         + i
         + ')" name="todo'
         + i
         + 'value="'
         + toDoList[i].completed
         + '"><label for="todo'
         + i
         + '">'
         + toDoList[i].content
         + '</label>'
     }
     list.innerHTML += '</form>';
}
display();