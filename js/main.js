'use strict';

// Definisco un array con le immagini
const images = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];
// Salvo lo slider in una variabile
const slider = document.getElementById('slider');
// Salvo in una variabile il container delle miniature
const thumbnailsContainer = document.getElementById('thumbnails-container');
// Definisco una variabile items
let items = '';
// Definisco una variabile per le miniature
let thumbnails = '';

// Definisco un ciclo for in cui genero gli elementi item e li aggiungo ad items
for (let i = 0; i < images.length; i++) {
    items += `<div class="item"><img src="img/${images[i]}" alt="img"></div>`;  
    thumbnails += `<div class="thumbnail"><div class="layer overlay"></div><img src="img/${images[i]}" alt="thumbnail"></div>`;
} 

// Aggiungo allo slider gli elementi item
slider.innerHTML += items;
// Assegno al primo item la classe show 
//document.querySelector('.item').classList.add('show');

// Aggiungo le miniature al container 
thumbnailsContainer.innerHTML += thumbnails;

// Assegno le frecce prev e next a due variabili
const prev = document.getElementById('prev');
const next = document.getElementById('next');
// Definisco la variabile active 
let active = 0;
// Definisco la variabile itemsList
const itemsList = document.querySelectorAll('.item');
// Aggiungo la classe show al primo item
itemsList[active].classList.add('show');

// Definisco la lista delle miniature
const thumbnailsLayersList = document.querySelectorAll('.layer');
// Rimuovo la classe overlay e aggiungo la classe border alla prima miniatura
thumbnailsLayersList[active].classList.remove('overlay');
thumbnailsLayersList[active].classList.add('border');

// Aggiungo evento onclick alla freccia next
next.addEventListener('click', function() {
    if (active < itemsList.length - 1) {
        itemsList[active].classList.remove('show');
        // Comportamento miniature
        thumbnailsLayersList[active].classList.add('overlay');
        thumbnailsLayersList[active].classList.remove('border');
        // Incremento active
        active++;
        itemsList[active].classList.add('show');
        // Comportamento miniature
        thumbnailsLayersList[active].classList.remove('overlay');
        thumbnailsLayersList[active].classList.add('border');
    } else {
        itemsList[active].classList.remove('show');
        // Comportamento miniature
        thumbnailsLayersList[active].classList.add('overlay');
        thumbnailsLayersList[active].classList.remove('border');
        // Azzero active
        active = 0;
        itemsList[active].classList.add('show');
        // Comportamento miniature
        thumbnailsLayersList[active].classList.remove('overlay');
        thumbnailsLayersList[active].classList.add('border');
    }
});

// Aggiungo evento onclick alla freccia prev
prev.addEventListener('click', function() {
    if (active > 0) {
        itemsList[active].classList.remove('show');
        // Comportamento miniature
        thumbnailsLayersList[active].classList.add('overlay');
        thumbnailsLayersList[active].classList.remove('border');
        // Decremento active
        active--;
        itemsList[active].classList.add('show');
        // Comportamento miniature
        thumbnailsLayersList[active].classList.remove('overlay');
        thumbnailsLayersList[active].classList.add('border');
    } else {
        itemsList[active].classList.remove('show');
        // Comportamento miniature
        thumbnailsLayersList[active].classList.add('overlay');
        thumbnailsLayersList[active].classList.remove('border');
        // Assegno ad active l'ultima posizione di itemList
        active = itemsList.length - 1;
        itemsList[active].classList.add('show');
        // Comportamento miniature
        thumbnailsLayersList[active].classList.remove('overlay');
        thumbnailsLayersList[active].classList.add('border');
    }
});