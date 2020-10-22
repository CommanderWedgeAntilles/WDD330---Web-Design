//import ls from './ls.js';
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
    localStorage.setItem("tDL",toDoList);
    console.log(localStorage.getItem("tDL"));
    


    display();
}


function checkIt(i){
        console.log(i);
        //var idval = "todo"+i;
        var idvalL = "todoL"+i;  
        //var checked = document.getElementById(idval).value;
        toDoList[i].complete();

        if (toDoList[i].completed == true){
            toDoList[i].line = "line-through";
            document.getElementById(idvalL).style.textDecoration = toDoList[i].line;
        }else{
            toDoList[i].line = "none";
            document.getElementById(idvalL).style.textDecoration = toDoList[i].line;
        }
        localStorage.setItem("tDL",toDoList);
    }

// for(let i=0; i < toDoList.length; i++){
//     var idVal = "todo"+i;
//     document.getElementById(idval).addEventListener('change', checkIt(i), false);
// }

function deleteIt(i){
    var idvalB = "todoB"+i;
    //delete the item from the list
    toDoList.splice(i,1);
    document.getElementById("d"+i).remove();

}


//display the toDo list
function display(){

    var list = document.getElementById("toDoList");

    function createList(toDo,i){
        list.innerHTML +=`<div name="listItem" id="d${i}"><input type = "checkbox" id ="todo${i}" onclick="checkIt(${i})"  name="todo${i}" value="${toDo.completed}">
        <label for="todo${i}" id="todoL${i}">${toDo.content}</label><button id="todoB${i}" onclick="deleteIt(${i})" style="padding: 0; border: none; background: none;">X</button></div>`;
        console.log(toDoList[i]);
        
    }

    let i = (toDoList.length - 1);
    createList(toDoList[i],i);

    // for(let i = 0; i < toDoList.length; i++){
    //     createList(toDoList[i],i);
    // }
}
display();