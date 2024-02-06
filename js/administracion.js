class Producto{
    static contador = localStorage.getItem('codProd');
    constructor(nombre, precio, categoria, imagen, descripcion, stock){
        this.codigo = ++Producto.contador;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.stock = stock;
    }
}
let usuario = JSON.parse(localStorage.getItem('usuario'));
if(usuario && usuario.rol === 'Administrador'){
    let usuarios = JSON.parse(localStorage.getItem('usuarios'));
    let contUsu = document.getElementById('mostrarUsuarios');
    mostrarUsuarios(contUsu, usuarios);

    let articulos = JSON.parse(localStorage.getItem('articulos'));
    let contArticulos = document.getElementById('mostrarArticulos');
    mostrarProductos(contArticulos,articulos);

    let workshops = JSON.parse(localStorage.getItem('workshops'));
    let contWorkshops = document.getElementById('mostrarWorkshops');
    mostrarProductos(contWorkshops,workshops);

    let cursos = JSON.parse(localStorage.getItem('cursos'));
    let contCursos = document.getElementById('mostrarCursos');
    mostrarProductos(contCursos,cursos);
    function mostrarUsuarios(contenedor, usuarios){
        for (let i = 0; i < usuarios.length; i++) {
            if(usuarios[i].rol != 'Administrador'){
                contenedor.innerHTML += `<div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#Elemento${i}" aria-expanded="false">
                            ${usuarios[i].nombre}
                        </button>
                    </h2>
                    <div id="Elemento${i}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>Email:</strong> ${usuarios[i].email}
                        </div>
                        <button type="button" class="btn btn-danger btn-sm float-end" onclick="eliminarUsuario(this, '${usuarios[i].email}')">Eliminar</button>
                    </div>
                </div>`;
            }else{
                contenedor.innerHTML += `<div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#Elemento${i}" aria-expanded="false">
                            ${usuarios[i].nombre}
                        </button>
                    </h2>
                    <div id="Elemento${i}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>Email:</strong> ${usuarios[i].email}
                        </div>
                    </div>
                </div>`;
            }
        }
    }
    function eliminarUsuario(elemento, email){
        let item = elemento.parentNode.parentNode;
        item.parentNode.removeChild(item);
        usuarios = usuarios.filter(u => u.email != email);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
    function mostrarProductos(contenedor, productos){
        let ruta;
        for (let i = 0; i < productos.length; i++) {
            if(productos[i].imagen.includes('media')){
                ruta = '../'+productos[i].imagen
            }else{
                ruta = productos[i].imagen;
            }
            contenedor.innerHTML +=`<div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#prod${i + productos[i].codigo}"
                        aria-expanded="false" aria-controls="prod${i + productos[i].codigo}">
                        ${productos[i].nombre}
                    </button>
                </h2>
                <div id="prod${i + productos[i].codigo}" class="accordion-collapse collapse" data-bs-parent="accordionExample">
                    <div class="accordion-body">
                        <div class="d-flex flex-wrap flex-row justify-content-around align-items-center">
                            <img src="${ruta}" alt="${productos[i].nombre}" height="300px">
                            <p class="py-2" style="width: 300px;"><strong>Descripcion:</strong><br>${productos[i].descripcion}.<br><strong>Precio: $</strong>${productos[i].precio}<br><strong>Stock: </strong>${productos[i].stock}
                            </p>
                        </div>
                    </div>
                    <button type="button" class="btn btn-danger btn-sm float-end" onclick="eliminarProducto(this, '${productos[i].codigo}','${productos[i].categoria}')">Eliminar</button>
                </div>
            </div>`;
        }
    }
    function eliminarProducto(elemento, codigo, categoria){
        let item = elemento.parentNode.parentNode;
        item.parentNode.removeChild(item);
        switch (categoria) {
            case 'Articulos':
                articulos = articulos.filter(p => p.codigo != codigo);
                localStorage.setItem('articulos',JSON.stringify(articulos));
                break;
            case 'Workshops':
                workshops = workshops.filter(p => p.codigo != codigo);
                localStorage.setItem('workshops',JSON.stringify(workshops));
                break;
            case 'Cursos':
                cursos = cursos.filter(p => p.codigo != codigo);
                localStorage.setItem('cursos',JSON.stringify(cursos));
                break;
        }
    }
    function agregarProducto(event) {
        event.preventDefault();
    
        let nombre = document.getElementById('nombre').value;
        let precio = parseFloat(document.getElementById('precio').value);
        let categoria = document.getElementById('categoria').value;
        let imagen = document.getElementById('imagen').value;
        let descripcion = document.getElementById('descripcion').value;
        let stock = parseInt(document.getElementById('stock').value);
    
        let producto = new Producto(nombre, precio, categoria, imagen, descripcion, stock);
        localStorage.setItem('codProd',Producto.contador)
        console.log(producto)
        switch (producto.categoria) {
            case 'Articulos':
                articulos.push(producto);
                localStorage.setItem('articulos',JSON.stringify(articulos));
                break;
            case 'Workshops':
                workshops.push(producto);
                localStorage.setItem('workshops',JSON.stringify(workshops));
                break;
            case 'Cursos':
                cursos.push(producto);
                localStorage.setItem('cursos',JSON.stringify(cursos));
                break;
        }
        window.location = './administracion.html'
    }
}else{
    location.href= "../index.html";
}
