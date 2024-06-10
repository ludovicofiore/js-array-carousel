// inserire le immagini dinamicamente da js

// scrivo array con immagini
const carouselImage = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];

// dichiaro variabile contenitore 
const imageContainer = document.querySelector(".items-container");

// estrapolo elementi array con ciclo
for (let i = 0; i < carouselImage.length; i++) {

    // creo elemento con immagine
    let element = `
        <div class="item">
                <img src="${carouselImage[i]}">
        </div>
    `;

    // porto elemento in pagina
    imageContainer.innerHTML += element;
}


// seleziono elementi item 
const items = document.getElementsByClassName("item");

// aggiungo classe active al primo elemento
let activeItem = 0;
items[activeItem].classList.add("active"); 


// getione click per prossima immagine

// dichiaro variabile bottone
const nextButton = document.getElementById("up");

nextButton.addEventListener("click",
    function() {

        // verifico di non essere all'ultima immagine
        if (activeItem < carouselImage.length - 1) {

            // elimino classe active da elemento precedente
            items[activeItem].classList.remove("active"); 

            // incremento valore indice
            activeItem++;

            // aggiungo classe active
            items[activeItem].classList.add("active");

        } else if (activeItem = carouselImage.length - 1) { //se arrivo all'ultima immagine carousel comincia da capo

            items[activeItem].classList.remove("active"); 

            //valore indice
            activeItem = 0;

            // aggiungo classe active
            items[activeItem].classList.add("active");
            
        }

    
    }
)


// gestione click per immagine precedente

// dichiaro variabile bottone
const previousButton = document.getElementById("down");

previousButton.addEventListener("click",
    function() {
        

        // verifico di non essere alla prima immagine
        if (activeItem > 0 ) {

            // elimino classe active da elemento precedente
            items[activeItem].classList.remove("active"); 

            // decremento valore indice
            activeItem--;

            // aggiungo classe active
            items[activeItem].classList.add("active");

        } else if (activeItem = 0) { 

            items[activeItem].classList.remove("active"); 

            // valore indice
            activeItem = carouselImage.length - 1;

            // aggiungo classe active
            items[activeItem].classList.add("active");
            
        }

    
    }
)