var articulos = JSON.parse(localStorage.getItem('articulos'));
var workshops = JSON.parse(localStorage.getItem('workshops'));
var cursos = JSON.parse(localStorage.getItem('cursos'));
console.log(articulos)
var divArticulos = document.getElementById('articulos');
var divWS = document.getElementById('workshops');
var divCursos = document.getElementById('cursos');

mostrarProductos(divArticulos,articulos);
mostrarProductos(divWS,workshops);
mostrarProductos(divCursos,cursos);

function mostrarProductos(contenedor, productos){
    for (let i = 0; i < productos.length; i++) {
        if(i==0){
            contenedor.innerHTML += `<div class="item active" style="background-image: url(${productos[i].imagen});"><div class="item-desc"><h3>${productos[i].nombre}</h3><p>${productos[i].descripcion}</p><a class="btn btn-outline-danger px-5" href="html/404.html">Ver</a></div></div>
            `;    
        }else{
            contenedor.innerHTML += `<div class="item" style="background-image: url(${productos[i].imagen});"><div class="item-desc"><h3>${productos[i].nombre}</h3><p>${productos[i].descripcion}</p><a class="btn btn-outline-danger px-5" href="html/404.html">Ver</a></div></div>
            `;    
        }
    }
}