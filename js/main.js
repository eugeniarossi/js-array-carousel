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
// Definisco la variabile itemsList
const itemsList = document.querySelectorAll('.item');
// Aggiungo la classe show al primo item
itemsList[active].classList.add('show');

// Aggiungo evento onclick alla freccia next
next.addEventListener('click', function() {
    if (active < itemsList.length - 1) {
        itemsList[active].classList.remove('show');
        active++;
        itemsList[active].classList.add('show');
    } else {
        itemsList[active].classList.remove('show');
        active = 0;
        itemsList[active].classList.add('show');
    }
});

// Aggiungo evento onclick alla freccia prev
prev.addEventListener('click', function() {
    if (active > 0) {
        itemsList[active].classList.remove('show');
        active--;
        itemsList[active].classList.add('show');
    } else {
        itemsList[active].classList.remove('show');
        active = itemsList.length - 1;
        itemsList[active].classList.add('show');
    }
});