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
    }

];

function createList(){
    
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
createList();

