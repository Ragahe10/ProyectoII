let busqueda = localStorage.getItem('busqueda').toString();

let articulos = JSON.parse(localStorage.getItem('articulos'));
let workshops = JSON.parse(localStorage.getItem('workshops'));
let cursos = JSON.parse(localStorage.getItem('cursos'));
let buscados = document.getElementById('buscados');
cargarBusqueda();
function cargarBusqueda(){
    let filterArticulos = articulos.filter(a => a.nombre.toLowerCase().includes(busqueda.toLowerCase()) || a.descripcion.toLowerCase().includes(busqueda.toLowerCase()) || a.categoria.toLowerCase().includes(busqueda.toLowerCase()));
    let filterWorkshops = workshops.filter(w => w.nombre.toLowerCase().includes(busqueda.toLowerCase()) || w.descripcion.toLowerCase().includes(busqueda.toLowerCase()) || w.categoria.toLowerCase().includes(busqueda.toLowerCase()));
    let filterCursos = cursos.filter(c => c.nombre.toLowerCase().includes(busqueda.toLowerCase()) || c.descripcion.toLowerCase().includes(busqueda.toLowerCase()) || c.categoria.toLowerCase().includes(busqueda.toLowerCase()));

    let productos = [...filterArticulos, ...filterWorkshops, ...filterCursos]

    if(productos.length >0){
        buscados.innerHTML ='';
        for (let i = 0; i < productos.length; i++) {
            if(productos[i].imagen.includes('media/')){
                buscados.innerHTML += `
                <a id="resultado" href="#" onclick="verProducto(${productos[i].codigo})" style="text-decoration: none;" class="mx-auto d-flex justify-content-center align-items-center">
                <img src="../${productos[i].imagen}" alt="${productos[i].nombre}" width="200px" height="200px" >
                    <div class="px-3">
                        <h3 class="text-danger">${productos[i].nombre}</h3>
                        <p class="text-black truncate-text">${productos[i].descripcion}</p>
                        <p class="text-black"><strong>$${productos[i].precio}</strong></p>
                    </div>
                </a>
                <hr>`;
            }else{
                buscados.innerHTML += `
                <a id="resultado" href="#" onclick="verProducto(${productos[i].codigo})" style="text-decoration: none;" class="mx-auto d-flex justify-content-center align-items-center">
                <img src="${productos[i].imagen}" alt="${productos[i].nombre}" width="200px" height="200px" >
                    <div class="px-3">
                        <h3 class="text-danger">${productos[i].nombre}</h3>
                        <p class="text-black truncate-text">${productos[i].descripcion}</p>
                        <p class="text-black"><strong>$${productos[i].precio}</strong></p>
                    </div>
                </a>
                <hr>`;
            }
        }
    }
}

function verProducto(id){
    var producto = articulos.find(p=>p.codigo==id) || workshops.find(p=>p.codigo==id) || cursos.find(p=>p.codigo==id);
    localStorage.setItem('detalle', JSON.stringify(producto));
    window.location.href="detalle.html"
}