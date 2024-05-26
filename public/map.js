//Page loader
document.addEventListener("DOMContentLoaded", ()=> {
    const preloader = document.getElementById('preloader');

    setTimeout(() =>{
        preloader.style.display = 'none';
    }, 1500)
})

//Loading Leaflet.js map 
let map = L.map('map').setView([45.1, 16.5], 8);
document.addEventListener('DOMContentLoaded', () => {
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
});

//Creating custom icon for displaying flights
const planeIcon = L.icon({
    iconUrl: './images/planeIcon.svg',

    iconSize:     [30, 50], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

const fetchFlightData = async function fetchFlightDataFromEndPoint() {
    try {
      const response = await fetch('/api/flights');
      const flights = await response.json();
      for(let flight of flights){
        console.log(flight.id)
        const marker = L.marker([flight.latitude, flight.longitude],{icon: planeIcon}).addTo(map).bindPopup('hi!');
      }
    } catch (error) {
      console.error('Error fetching flight data:', error);
    }
  }  
fetchFlightData();