# Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

### MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.

### MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

### MILESTONE 3
Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

### BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l’utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

### BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

*** 

### MILESTONE 1
1) Costruisco il container, lo slider e l'impostazione degli item che andranno all'interno. 

### MILESTONE 2
1) Rimuovo il markup statico e imposto come default degli elementi item display none. 

2) Definisco un array con le immagini. 

3) Definisco delle variabili nello scope globale:  
    - una variabile slider in cui salvo lo slider del DOM
    - una variabile items

4) Definisco un ciclo for, con variabile i < della lunghezza della lista immagini, in cui genero gli elementi item contenenti l'immagine a cui passo la variabile i, e li aggiungo ad items.  

5) Aggiungo allo slider gli elementi item. E assegno al primo item una classe show per renderlo visibile. 

### MILESTONE 3 
1) Nello scope globale definisco due variabili a cui assegno le frecce prev e next del DOM e una variabile active di default 0. 

2) Passo la variabile active [active] all'elemento a cui ho aggiunto la classe show. 

2) Definisco una lista di tutti gli item. 

3) Aggiungo un evento onclick alla freccia next e stabilisco delle condizioni: 
    Se active è minore della lunghezza della lista degli items - 1, 
        - rimuovo la classe show all'item a cui passo la variabile active
        - incremento active
        - assegno la classe show all'item a cui passo la variabile active

4) Aggiungo un evento onclick alla freccia prev stabilendo condizioni diverse:
    Se active è maggiore di 0,
        - svolgo le stesse operazioni dell'evento next, ma decremento la variabile active

