
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
form.addEventListener('add', add, false);

function add(){
    const newToDo = {}
    newToDo.id = Date.now();
    newToDo.content = addform.addInput.value;
    newToDo.completed = false;
    newToDo.complete = function(){
        if(todo.completed == false){todo.completed = true;}
        else{todo.completed = false;}
    }
    toDoList.push(newToDo);
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
    }

//display the toDo list
function display(){

    var list = document.getElementById("toDoList")
    
    document.list.innerHTML = '<li><a href="#" id="menu">&equiv; Menu</a></li>'
    //dynamic menu
    for (let i = 0; i <= toDoList.length; i++)
     {
         document.list.innerHTML += '<form><input type = "checkbox" id ="todo'
         + i
         + 'onclick="checkIt("
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



    
}