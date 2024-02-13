function getBaseUrl() {
    let baseUrl = window.location.href.split('/').slice(0, -1).join('/');
    return baseUrl.endsWith('/html') ? baseUrl : baseUrl + '/html';
}

function actualizarInterfaz() {
    let usuarioActual = JSON.parse(localStorage.getItem('usuario'));
    let baseUrl = getBaseUrl()
    if (usuarioActual) {
        if(usuarioActual.rol !== 'Administrador'){
            document.getElementById('cont-usu').innerHTML = `
                <span class="text-light mx-2">¡Hola, ${usuarioActual.nombre}!</span>
                <a class="btn btn-outline-light mx-1" href="#" onclick="cerrarSesion()" title="Cerrar Sesión">
                    <i class="bi bi-door-closed"></i> Cerrar Sesión
                </a>
            `;
        }else{
            document.getElementById('cont-usu').innerHTML = `
                <span class="text-light mx-2">¡Hola, ${usuarioActual.nombre}!</span>
                <a class="btn btn-outline-light mx-1" href="#" onclick="cerrarSesion()" title="Cerrar Sesión">
                    <i class="bi bi-door-closed"></i> Cerrar Sesión
                </a>
                <a class="btn btn-outline-light mx-1" href="${baseUrl}/administracion.html" title="Administracion">
                    <i class="bi bi-wrench-adjustable-circle-fill"></i>
                </a>
            `;
        }
    }else{
        document.getElementById('cont-usu').innerHTML = `
        <a class="btn btn-outline-secondary " href="../html/registro.html" title="Sig Up">
        <i class="bi bi-person-plus"></i>
        </a>
        <a class="btn btn-outline-light mx-1" href="../html/login.html" title="Log In">
            <i class="bi bi-door-open"></i>
        </a>
        `;
    }
}

function cerrarSesion() {
    localStorage.removeItem('usuario');
    actualizarInterfaz();
    location.reload()
}

// Al cargar la página, actualizar la interfaz
window.onload = actualizarInterfaz;