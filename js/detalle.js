let producto = JSON.parse(localStorage.getItem('detalle'));

let imagen = document.getElementById('imagen');
imagen.innerHTML=`<img src="../${producto.imagen}" alt="mate">`;
let detalle = document.getElementById('detalle');
detalle.innerHTML=`
<div>
    <h2 class="text-danger">${producto.nombre}</h2>
    <h4>Categoría: ${producto.categoria}</h4>
    <p id="stock"><strong>Stock: </strong>${producto.stock}</p>
</div>
<div>
    <p>${producto.descripcion}</p>
</div>
<a href="./404.html" class="btn btn-danger p-2">Comprar</a>`;
