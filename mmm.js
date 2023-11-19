var swiper=new Swiper(".mySwiper-1",{
    slidesPerView:1,
    spaceBetween:30,
    loop:true,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    navigation:{
        nextEl:".swipper-button-next",
        prevEl:".swipper-button-prev"
    }
});
/************************************************************************** */
var swiper=new Swiper(".mySwiper-2",{
    slidesPerView:1,
    spaceBetween:30,
    loop:true,
    navigation:{
        nextEl:".swipper-button-next",
        prevEl:".swipper-button-prev"
    },
    0:{
        slidesPerView:1
    },
    520:{
        slidesPerView:2
    },
    950:{
        slidesPerView:3
    }
});
/******************************************carrito*******************************************/ 
const carrito=document.getElementById('carrito');
const elementos1=document.getElementById('lista-1');
const elementos2=document.getElementById('lista-2');
const elementos3=document.getElementById('lista-3');
const lsita=document.querySelector('#lista-carrito tbody');
const vaciarCarrito=document.getElementById('vaciar-carrito');

cargarElentListeners();
function cargarElentListeners(){
    elementos1.addEventListener('click',comprarElemento);
    elementos2.addEventListener('click',comprarElemento);
    elementos3.addEventListener('click',comprarElemento);
    carrito.addEventListener('click',eliminarElemnto);

    vaciarCarritoBtn.addEventListener('click',eliminarElemento);

}
function comprarElemento(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const elemento= e.target.parentElement.parentElement;
        leerDatosElemnto(elemento);
    }
}
function leerDatosElemnto(elemento){
    const infoElemento={
        imagen:elemento.querySelector('img').src,
        titulo:elemento.querySelector('h3').textContent,
        precio:elemento.querySelector('.precio').textContent,
        id:elemento.querySelector('a').getAttribute('data-ic')
    }
    insertarCarrito(infoElemento);
}
function insertarCarrito(elemento){
    const row=document.createElement('tr');
    row.innerHTML=' <td> <img src="${elemento.imagen}" width = 100 ></td> <td>${elemnto.titulo}</td><td>${elemnto.precio}</td><td><a href="#" class="borrar" data-id="${elemnto.id}"></td>';
    lsita.appendChild(row);

}
function eliminarElemento(e){
    e.preventDefault();
    let elemento,
    elementoid;
    if(e.target.classList.contains('borrar')){
        elemento=e.target.parentElement.parentElement;
        elementoId=elemnto.querySelector('a').getAttribute('dara-id');
    }
}
function vaciarCarrito(){
    while(lsita.firstChild){
        lsita.removeChild(lista.firstChild);
    }
    return false;
}