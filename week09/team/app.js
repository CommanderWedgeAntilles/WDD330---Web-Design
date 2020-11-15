const url = "https://swapi.dev/api/starships/";
console.log("INSIDE");

/* // async function getStarships(url){
//     try{
//         const response = await fetch(url); 
//         if(!response.ok){
//             throw Error(response.statusText);
//         } else {
//             const fetchJson = await response.json();
//             return fetchJson;
//         }
//     }catch (error){
//         console.log(error);
//     }
// } */

// function getStarships(url) {
//     let response = fetch(url);
//     return response;
// }



async function getShips(url){
    
    let ship = await fetch(url);
    ship.json();
    console.log("SHIP: " + ship.name);

    renderShips(ship);
}

function renderShips(listOShips){
    // console.log("LIST OF SHIPS: " + listOShips.stringify());
    const listElement = document.getElementById("listElement"); 
    const newArray = listOShips.forEach(ship => {
        return `<li <a href="${ship.url}">${ship.name}</a> </li>
                <li ${item.ship.model}</li>`
                //<li data-url="${item.ship.url}"> ${item.ship.manufacturer}</li>
                //<li data-url="${item.ship.url}"> ${item.ship.cost_in_credits}</li>
                //<li data-url="${item.ship.url}"> ${item.ship.starship_class}</li>
                //<li data-url="${item.ship.url}"> ${item.ship.pilots}</li> 
                //<li data-url="${item.ship.url}"> ${item.ship.films}</li>
    });

    
    listElement.innerHTML = newArray.join("");
}


function displayDetails(details) {
    var btn = document.createElement("button"); 
    btn.innerHTML = "Details"
    document.body.appendChild(btn);
    
}

async function shipClicked(event){
    const details = await fetch(event.target.dataset.url).then(convertToJson);
    console.log(details);
    displayDetails(details);
}

document 
.getElementById("listElement")
.addEventListener("click", shipClicked); 

getShips(url);