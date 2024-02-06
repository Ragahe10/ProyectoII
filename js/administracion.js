let usuarios = JSON.parse(localStorage.getItem('usuarios'));
let contUsu = document.getElementById('mostrarUsuarios');
mostrarUsuarios(contUsu, usuarios);

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
