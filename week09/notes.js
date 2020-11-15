var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";

context.fillRect(10, 10, 100, 100);   
context.strokeRect(10, 10, 100, 100);

function drawPattern() {
    var can = document.getElementById("myCan");
    var con = canvas.getContext("2d");

    context.strokeStyle = "red";
    var gradient = context.createLinearGradient(0, 0, 0, 200); 

    var img = new Image(); 
    img.src = "bike.jpg";
    img.onload = function() { 
        var pattern = context.createPattern(img, "repeat"); 
        context.fillStyle = pattern;                        
        context.fillRect(10, 10, 100, 100);                  
        context.strokeRect(10, 10, 100, 100);             
    };
}
drawPattern();

/* -webkit-transform: translate(45px,-45px); /* iOS8, Android 
↵4.4.3, BB10 */
/* -ms-transform: translate(45px,-45px); /* IE9 only *//*
transform: translate(45px,-45px); */