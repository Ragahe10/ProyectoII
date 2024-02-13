let usuarioActual = localStorage.getItem('usuario');
if(usuarioActual){
    window.location.href = "../index.html";
}
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let contrasenia = document.getElementById('contrasena').value;
    let usuarios = JSON.parse(localStorage.getItem('usuarios'));
    let usuarioValido = usuarios.find(usuario => usuario.email === email && usuario.contrasenia === contrasenia);

    if (usuarioValido) {
        localStorage.setItem('usuario', JSON.stringify({
            nombre: usuarioValido.nombre,
            email: usuarioValido.email,
            productos: usuarioValido.productos
        }));

        actualizarInterfaz();
        document.getElementById('mensaje').innerHTML = '<div class="alert alert-success">Inicio de sesión exitoso.</div>';
        location.reload()
    } else {
        document.getElementById('mensaje').innerHTML = '<div class="alert alert-danger">Credenciales incorrectas.</div>';
    }
}, false);


// Al cargar la página, actualizar la interfaz
window.onload = actualizarInterfaz;



function actualizarInterfaz() {
    let usuarioActual = localStorage.getItem('usuario');
    if (usuarioActual) {
        document.getElementById('cont-usu').innerHTML = `
            <span class="text-light mx-2">¡Hola, ${usuarioActual.nombre}!</span>
            <a class="btn btn-outline-light mx-1" href="#" onclick="cerrarSesion()" title="Cerrar Sesión">
                <i class="bi bi-door-closed"></i> Cerrar Sesión
            </a>
        `;
    }
}

function cerrarSesion() {
    localStorage.removeItem('usuario');
    actualizarInterfaz();
    location.reload()
}