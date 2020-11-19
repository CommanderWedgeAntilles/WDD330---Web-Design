/*search in input box (addEventListener keyup)
    get what they typed
    make a call to the search API with the query string
    than the resuts come back
    for each result generate some HTML and add to the html list */
    
    
    import {foodKey} from "./keys.js";
    
    const baseurl ="https://api.nal.usda.gov/fdc/vl/foods/search?api_key=";
    

    function convertToJSON(res){
        if(res.ok){
            return res.json();
        }else{
            throw new Error(res.statusText);
        }
    }
    
    async function getSearchResults(query) {
        const results = await fetch(baseURL+foodKey+`&query=${query}`).then(converttoJson);
        return results;
    }

    function renderSearchResults(results){
        const resultsListElement = document.getElementById('searchResults');
        resultsListElement.innerHTML = results.map((item) => `<li>${item.description}</li>`).join('');
    }
    
    
    export async function search(ev){
        const query = ev.target.value;
        console.log(ev.target.value);

        if(query.length > 2){
            const results = await getSearchResults(query);
            console.log(results);

            renderSearchResults(results.foods);
        }



    }

