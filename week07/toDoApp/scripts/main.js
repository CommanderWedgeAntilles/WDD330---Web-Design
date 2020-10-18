
//get the list array ready
//create the todo object
var toDoList = [];
class Todo {
    constructor(nID, nContent, nCompleted){
        this.id=nID; 
        this.content = nContent; 
        this.completed = nCompleted;
    } 
    complete(){
        if(this.completed == false){this.completed = true;}
        else{this.completed = false;}
    }
    comp(){return this.completed;}
}

var dToDo = new Todo(Date.now(),"Default Task",false);
toDoList.push(dToDo);

//add an item to the list
const addForm = document.forms['addItem'];


//add function
function addIt(){
    const newToDo = new Todo(Date.now(), document.getElementById('addInput').value, false);
    
    toDoList.push(newToDo);

    display();
}

addForm.addEventListener('add', addIt, false);

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
    
    //dynamic menu
    for (let i = 0; i <= toDoList.length; i++)
     {
         temp = new Todo(Date.now(),"Default Task",false);
         temp = toDoList[i];
         list.innerHTML += '<form><input type = "checkbox" id ="todo'
         + i
         + ' onclick="checkIt('
         + i
         + ')" name="todo'
         + i
         + ' value="'
         + temp.completed
         + '"><label for="todo'
         + i
         + '">'
         + temp.content
         + '</label></form>'
     }
}
display();