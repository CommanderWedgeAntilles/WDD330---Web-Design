//EventListeners
//document.querySelector('#menu').addEventListener('click',toggleMenu);
/*function declaration*/
// function toggleMenu(){

// }

/*function expression*/
// const toggle = function() {

// }

const links = [
    {
        label: "Week 01 notes",
        url: "week01/notes.html"
    },
    {
        label: "Week 02 Notes",
        url: "week02/notes.html"
    },
    {
        label: "Week 03 Notes",
        url: "week03/notes.html"
    },
    {
        label: "Week 04 Notes",
        url: "week04/notes.html"
    },
    {
        label: "Week 05 Notes",
        url: "week05/notes.html"
    },
    {
        label: "Week 06 Notes",
        url: "week06/notes.html"
    },
    {
        label: "Week 07 Notes",
        url: "week07/notes.html"
    },
    {
        label: "Midterm Check-in",
        url: "week07/toDoApp/toDo.html"
    },
    {
        label: "Week 08 Notes",
        url: "week08/notes.html"
    },
    {
        label: "Week 09 Notes",
        url: "week09/notes09.html"
    },
    {
        label: "Week 10 Notes",
        url: "week10/notes.html"
    },
    {
        label: "Week 11 Notes",
        url: "week11/notes.html"
    },
    {
        label: "Major Project",
        url: "Major_Project/index.html"
    }
    


];

function createTheList(){
    
    var list = document.getElementById("list")
    
    document.getElementById("list").innerHTML = '<li><a href="#" id="menu">&equiv; Menu</a></li>'
    //dynamic menu
    for (let i = 0; i <= links.length; i++)
     {
         document.getElementById("list").innerHTML += '<li><a href="'
         + links[i].url 
         +'">'
         + links[i].label
         +'</a></li>'

     }

}
createTheList();

