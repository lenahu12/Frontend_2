const contenedor = document.querySelector(".container");
function renderizarNoticias() {
    let nodoCards = 0;
    let nodoTextoYTitulo = 0;
    for (let i = 0; i < noticias.length; i++) {
        contenedor.innerHTML += '<section class="card"></section>';
        nodoCards = document.querySelectorAll(".card");
        nodoCards[i].innerHTML += '<div class="text-title"></div>';
        nodoTextoYTitulo = document.querySelectorAll(".text-title");
        nodoTextoYTitulo[i].innerHTML += `<h2> ${noticias[i].titulo} </h2>`;
        nodoTextoYTitulo[i].innerHTML += `<p class="text-card"> ${noticias[i].descripcion} </p>`;
        nodoCards[i].innerHTML += `<img src= ${noticias[i].imgUrl} >`;
    }
}
function esNacional() {
    let nodoCards = document.querySelectorAll(".card")
    for (let i = 0; i < noticias.length; i++) {
        let esNacional = noticias[i].tipoNacional;
        if (esNacional) {
            nodoCards[i].classList.add("nacional")
        }
    }
};





// function renderizarNoticias() {
//     for (let i = 0; i < noticias.length; i++) {
//       contenedor.innerHTML += '<section class="card"></section>';
//       let nodoCards = document.querySelectorAll(".card");   
//       nodoCards[i].innerHTML += '<div class="text-title"></div>';
//       let textoYTitulo = document.querySelectorAll(".text-title");                                                    
//       nodoCards[i].innerHTML += `<h2> ${noticias[i].titulo} </h2>`;
//       nodoCards[i].innerHTML += `<p> ${noticias[i].descripcion} </p>`;
//       nodoCards[i].innerHTML += `<img src= ${noticias[i].imgUrl} >`;
//       nodoCards[i].innerHTML += `<p> ${noticias[i].fecha} </p>`;
//     };
//   }
// 