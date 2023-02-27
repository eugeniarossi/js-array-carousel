'use strict';

// Definisco un array con le immagini
const images = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];
// Salvo lo slider in una variabile
const slider = document.getElementById('slider');
// Definisco una variabile items
let items = '';

// Definisco un ciclo for in cui genero gli elementi item e li aggiungo ad items
for (let i = 0; i < images.length; i++) {
    items += `<div class="item"><img src="img/${images[i]}" alt="img"></div>`;  
} 

// Aggiungo allo slider gli elementi item
slider.innerHTML += items;
// Assegno al primo item la classe show 
//document.querySelector('.item').classList.add('show');


// Assegno le frecce prev e next a due variabili
const prev = document.getElementById('prev');
const next = document.getElementById('next');
// Definisco la variabile active 
let active = 0;




