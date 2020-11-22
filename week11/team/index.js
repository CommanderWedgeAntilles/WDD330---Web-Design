const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
import { getJson, getLocation } from "./utilities.js";


async function quakes() {
    let currentLocation = await getLocation();
    const coord = currentLocation.GeolocationPosition;
    console.log(currentLocation.coords.latitude);
    console.log(currentLocation.coords.longitude);
    let url =`${baseUrl}&${currentLocation.coords.latitude}&${currentLocation.coords.longitude}&maxradiuskm=100`;
    console.log(url);
    let nearbyQuakes = await getJson(url);
}

quakes();
