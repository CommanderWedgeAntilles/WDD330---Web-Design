const player = {
    name: ['Player 1', 'Player 2'],
    turn: { yes: true, no: false}
};
function game(){

}
function turn(){

}


divNames = ['topLeft', 'topMid','topRight','midLeft','midMid','midRight','bottomLeft', 'bottomMid', 'bottomRight'];
 
for(var i =0; i < 9; i++){
    document.getElementById(divNames[i]).addEventListener('click', clickDiv(divNames[i]));
}
function clickDiv(val) {
    if(document.getElementById(val).value == 'X' || document.getElementById(val).value == 'O'){
        alert("This Space is Occupied.");
    }else{
        addXorO(val);
    }
}
        
function addXorO(cell){
    if(player.name == 'Player 1'){document.getElementById(cell).innerHTML('X');}
    else{document.getElementById(cell).innerHTML('O');}
}