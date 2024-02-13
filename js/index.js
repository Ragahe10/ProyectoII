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
        let id = productos[i].codigo;
        if(i==0){
            contenedor.innerHTML += `<div class="item active" style="background-image: url(${productos[i].imagen});"><div class="item-desc"><h3>${productos[i].nombre}</h3><p>${productos[i].descripcion}</p><a id="prod" class="btn btn-outline-danger px-5" href="#" onclick="verProducto(${id})">Ver</a></div></div>
            `;    
        }else{
            contenedor.innerHTML += `<div class="item" style="background-image: url(${productos[i].imagen});"><div class="item-desc"><h3>${productos[i].nombre}</h3><p>${productos[i].descripcion}</p><a id="prod" class="btn btn-outline-danger px-5" href="#" onclick="verProducto(${id})">Ver</a></div></div>
            `;    
        }
    }
}

function verProducto(id){
    var producto = articulos.find(p=>p.codigo==id) || workshops.find(p=>p.codigo==id) || cursos.find(p=>p.codigo==id);
    localStorage.setItem('detalle', JSON.stringify(producto));
    window.location.href="html/detalle.html"
}