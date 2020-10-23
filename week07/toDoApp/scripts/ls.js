
export function saveToDo(todo){
    const toDoList = getToDo();

    toDoList.push(todo);
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

export function deleteToDo(id){
    const toDoList = getToDo();
    const updateToDo = toDoList.filter( todo => todo.id != id);
    localStorage.setItem('toDoList', JSON.stringify(updateToDo));
}

export function getToDo(){
    const toDoListString = localStorage.getItem('toDoList');
    let toDoList = [];

    if(toDoListString){
        toDoList = JSON.parse(toDoListString);
        console.log(toDoList);
    }
    return toDoList;
}
export default{
    saveToDo,
    deleteToDo,
    getToDo
}