class Usuario {
    constructor(nombre, email, contrasenia){
        this.nombre = nombre;
        this.email = email;
        this.contrasenia = contrasenia;
        this.productos = [];
    }
}
// let administrador = new Usuario('admin','admin99@email.com','admin');
// usuarios.push(administrador);
// localStorage.setItem('usuarios',JSON.stringify(usuarios));

let usuarios = JSON.parse(localStorage.getItem('usuarios'));
document.getElementById('regForm').addEventListener('submit',addUsuario,false);
let usuarioActual = localStorage.getItem('usuario');
if(usuarioActual){
    window.location.href = "../index.html";
}

function addUsuario(event){
    event.preventDefault();
    let email = document.getElementById('email').value;
    let nombre = document.getElementById('usuario').value;
    let contrasena = document.getElementById('contrasena').value;
    if(existe(email)){
        document.getElementById('mensaje').innerHTML = '<div class="alert alert-danger">El correo ya fué registrado.</div>';
    }else{
        let newUsu = new Usuario(nombre,email,contrasena);
        usuarios.push(newUsu);
        localStorage.setItem('usuarios',JSON.stringify(usuarios));
        window.location.href = './login.html';
    }
    
}
function existe(email){
    let usuario = usuarios.find(usuario => usuario.email == email);
    if(usuario){
        return true;
    }
    return false;
}