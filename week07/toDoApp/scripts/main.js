import ls, { deleteToDo, saveToDo, getToDo } from './ls.js';
//get the list array ready
//create the todo object
var toDoList = [];



class Todo {
    constructor(nID, nContent, nCompleted, nLine,nKill){
        this.id=nID; 
        this.content = nContent; 
        this.completed = nCompleted;
        this.line = nLine;
        this.kill = nKill;
    } 
    complete(){
        if(this.completed == false){this.completed = true;}
        else{this.completed = false;}
    }
    comp(){return this.completed;}
}

var dToDo = new Todo(Date.now(),"Default Task",false, "none", false);
toDoList.push(dToDo);



//add function
function addIt(){
    const newToDo = new Todo(Date.now(), document.getElementById('addInput').value, false, "none",false);
    
    toDoList.push(newToDo);
    saveToDo(newToDo);
    console.log(getToDo());
    


    display();
}


function checkIt(i){
        console.log(i);

        var toDoList = getToDo();
        //var idval = "todo"+i;
        var idvalL = "todoL"+i;  
        //var checked = document.getElementById(idval).value;
        toDoList[i].complete();

        if (toDoList[i].completed == true){
            toDoList[i].line = "line-through";
            document.getElementById(idvalL).style.textDecoration = toDoList[i].line;
            localStorage.setItem("toDoList", JSON.stringify(toDoList));
        }else{
            toDoList[i].line = "none";
            document.getElementById(idvalL).style.textDecoration = toDoList[i].line;
            localStorage.setItem("toDoList", JSON.stringify(toDoList));
        }
    }



function deleteIt(i){
    var toDoList = getToDo()
    var idvalB = "todoB"+i;
    //delete the item from the list
    deleteToDo(i);
    toDoList.splice(i,1);
    document.getElementById("d"+i).remove();

}


//display the toDo list
function display(){

    var toDoList = getToDo();

    var list = document.getElementById("toDoList");
    list.innerHTML = "";


    function createList(toDo,i){
        list.innerHTML +=`<div name="listItem" id="d${i}"><input type = "checkbox" id ="todo${i}"  name="todo${i}" onclick="checkIt(${i})" value="${toDo.completed}">
        <label for="todo${i}" id="todoL${i}">${toDo.content}</label><button id="todoB${i}" style="padding: 0; border: none; background: none;">X</button></div>`;
        console.log(toDo[i]);

        document.getElementById(`todoL${i}`).style.textDecoration = toDo.line;
        
    }

    for(let i = 0; i < toDoList.length; i++){
        createList(toDoList[i],i);
    }
}

// MAKE THIS ASYNCRONOUS
for(let i=0; i < toDoList.length; i++){
    if(document.getElementById('todo'+ i)){
        document.getElementById('todo'+ i).onclick(checkIt(i));
        }
    if(document.getElementById('todoB'+ i)){
        document.getElementById('todoB'+ i).onclick(deleteIt(i));
    }
    if(document.getElementById('addThis')){
        document.getElementById('addThis').addEventListener('click', addIt, false);
    }
}


display();