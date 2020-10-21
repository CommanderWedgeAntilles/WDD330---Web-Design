
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
        else{this.completed = fatlse;}
    }
    comp(){return this.completed;}
}

var dToDo = new Todo(Date.now(),"Default Task",false);
toDoList.push(dToDo);



//add function
function addIt(){
    const newToDo = new Todo(Date.now(), document.getElementById('addInput').value, false);

    
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

/* for(let i=0; i < toDoList.length; i++){
    var idVal = "todo"+i;
    document.getElementById(idval).addEventListener('change', checkIt(i), false);
} */




//display the toDo list
function display(){

    var list = document.getElementById("toDoList")
    list.innerHTML = "";

    function createList(toDo){
        list.innerHTML+=`<input type = "checkbox" id ="todo${i}" onclick="checkIt(${i})"  name="todo${i}" value="${toDo.completed}">
        <label for="todo${i}">${toDo.content}</label>`;
    }
    toDoList.forEach(createList);
/*     for (let i = 0; i < toDoList.length; i++)
     {
         list.innerHTML += '<input type = "checkbox" id ="todo'
         + i
         + '" onclick="checkIt('
         + i
         + ')" name="todo'
         + i
         + '" value="'
         + toDoList[i].completed
         + '"><label for="todo'
         + i
         + '">'
         + toDoList[i].content
         + '</label>'
     } */
}
display();