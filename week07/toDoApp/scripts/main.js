
//get the list array ready
//create the todo object
var toDoList = [];
const todo = {
    id: Date.now(), 
    content: "Default Task", 
    completed:false, 
    todo: function(nID, nContent, nCompleted){
        this.id=nID; 
        this.content = nContent; 
        this.completed = nCompleted;
    }, 
    complete: function(){
        if(this.completed == false){this.completed = true;}
        else{this.completed = false;}
    },
    transfer: function(ntodo){this.id=ntodo.id; 
        this.content = ntodo.content; 
        this.completed = ntodo.completed;
    },
    get comp(){return this.completed;}
};
toDoList.push(todo);

//add an item to the list
const addForm = document.forms['addItem'];


//add function
function addIt(){
    const newToDo = new todo(Date.now(), document.getElementById('addInput').value, false);
    
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
         var temp = new todo();
         temp.transfer(toDoList[i]);
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