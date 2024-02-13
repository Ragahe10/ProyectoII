class Usuario {
    constructor(rol, nombre, email, contrasenia){
        this.rol = rol;
        this.nombre = nombre;
        this.email = email;
        this.contrasenia = contrasenia;
        this.productos = [];
    }
};

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
    let contrasena2 = document.getElementById('contrasena2').value;
    if(existe(email)){
        document.getElementById('mensaje').innerHTML = '<div class="alert alert-danger">El correo ya fué registrado.</div>';
    }else{
        if(contrasena==contrasena2){
            let newUsu = new Usuario('',nombre,email,contrasena);
            usuarios.push(newUsu);
            localStorage.setItem('usuarios',JSON.stringify(usuarios));
            window.location.href = './login.html';
        }else{
            document.getElementById('mensaje').innerHTML = '<div class="alert alert-danger">La contraseña no coincide.</div>';
        }
    }
    
}
function existe(email){
    let usuario = usuarios.find(usuario => usuario.email == email);
    if(usuario){
        return true;
    }
    return false;
}