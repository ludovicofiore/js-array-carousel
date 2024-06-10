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

// aggiungo classe active 
items[0].classList.add("active"); 