//EventListeners
document.querySelector('#menu').addEventListener('click',toggleMenu);
/*function declaration*/
// function toggleMenu(){

// }

/*function expression*/
// const toggle = function() {

// }

function selectOL(){

}

function getList(){
    

}

function createList(){
    var list = document.getElementById("list")
    document.getElementById("list").innerHTML = '<li><a href="#" id="menu">&equiv; Menu</a></li>'
     for (i = 0; i <= links.length; i++)
     {
         document.getElementById("list").innerHTML = '<li><a href="'
         + links[i].url 
         +'">'
         + links[i].label
         +'</a></li>'

     }

}

const links = [
    {
        label: "Week 01 notes",
        url: "week1/notes.html"
    },
    {
        label: "Week 02 notes",
        url: "week2/notes.html"
    }
]