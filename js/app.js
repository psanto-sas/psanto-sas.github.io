
//traigo datos del carrusel


const izquierda = document.getElementById('flechaIzquierda');
const derecha = document.getElementById('flechaDerecha');
let puntos = document.getElementById('puntos');
let imagenCarousel = document.getElementById('imgCarousel');
let actual = 0;

let imagenes = [
    { "url": "imagenes/carrousel-1.webp"},
    { "url": "imagenes/carrousel-2.png"},
    { "url": "imagenes/carrousel-3.png"}
];

pagesCarousel()


izquierda.addEventListener('click', function(){
    actual -=1;
    if (actual === -1){
        actual = imagenes.length - 1
    }
    imagenCarousel.src = imagenes[actual].url;
    pagesCarousel()
})
derecha.addEventListener('click', function(){
    actual +=1;
    if (actual === imagenes.length){
        actual = 0
    }
    imagenCarousel.src = imagenes[actual].url;
    pagesCarousel()
})

function pagesCarousel() {
    puntos.innerHTML = '';

    for (let i = 0; i < imagenes.length; i++){
       if(i === actual){
         puntos.innerHTML += '<p class="bold">.</>'
       } else [
            puntos.innerHTML += '<p>.</p>'
       ]
    }

}