//Page loader
document.addEventListener("DOMContentLoaded", ()=> {
    const preloader = document.getElementById('preloader');

    setTimeout(() =>{
        preloader.style.display = 'none';
    }, 1500)
})


document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([45.1, 16.5], 8);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
});

