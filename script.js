'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(pos){
        const {latitude:lat, longitude:lon} =  pos.coords;

        
var map = L.map('map').setView([lat, lon], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.on('click', function(mapEvent){
    const {lat, lng} = mapEvent.latlng;
    
    L.marker([lat, lng]).addTo(map)
        .bindPopup('Workout')
        .openPopup();
        }, function(){
            alert('Cannot access your location');
        })
})

}
