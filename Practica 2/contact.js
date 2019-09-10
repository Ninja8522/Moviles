//Crear array con nombre usuarioRegistrado
var usuarioRegistrado = [];
const usuarioContainer = document.getElementById('userContainer');
//La variable id es para llevar el control de usuarios registrados
var id = 0;

//Funcion para obtener los datos
function registro() {
    email = document.getElementById('imputEmail').value;
    contraseña = document.getElementById('imputPassword').value;
    telefono = document.getElementById('imputTelefono').value;
    edad = document.getElementById('imputEdad').value;
    compra = document.getElementById('imputCompra').value;
    opcion = document.getElementById('imputSelect').value;
    guardar = document.getElementById('imputCheck').checked;

    usuario = {
        id,
        email,
        contraseña,
        telefono,
        edad,
        compra,
        opcion,
        guardar

    }

    //Llama la funcion para desplegar en una tarjeta los datos obtenidos del usuario
    registroUsuario(usuario);
    //Llama la funcion de llenado que despliega las tarjetas creadas con anterioridad
    llenado();
}

//Funcion de impresion de las tarjetas dinamicas
function registroUsuario(usuario) {
    //Este if es para validar que el checkbox este seleccionado, en caso de estarlo se guardan
    //los datos del usuario
    if(usuario.guardar == true){
        usuarioRegistrado.push(usuario);
        id+=1;
        //Al momento de hacer el push en el array se incrementa la id en 1
    }
    //En caso de no estar seleccionado el checkbox se despliega un mensaje de usuario registrado 
    else {
        alert('Usuario ' + usuario.email + ' ya registrado');
    }
}

//La funcion eliminarUsuario es para permitir quitar la tarjeta a la cual se le da click a su boton borrar
//el cual es el que manda llamar esta funcion
function eliminarUsuario(usuarioID){
    //La variable posicion es para llevar un control de donde esta posicionado el elemento a elimiar
    var poscision = 0;
    usuarioRegistrado.forEach(user =>{
        if(user.id==usuarioID){
            usuarioRegistrado.splice(poscision,1);
        }
        poscision+=1;
        //se manda llamar la funcion llenado para refrescar las tarjetas dinamicas
        llenado();
    });
}

//La funcion llenado simplemente crea las tarjetas dinamicias, esta es llamada en las funciones eliminar y registroUsuario
function llenado(){
    usuarioContainer.innerHTML = '';
    usuarioRegistrado.forEach(user =>{
        const content = '<div class="p-2"> <div class="card" style=" width: 18rem;"> <div class="card-body"> <h5 class="card-title">Usuario: '+ (user.id+1) +'</h5> <h6 class="card-subtitle mb-2 text-muted">Email: '+user.email+'</h6> <p class="card-text">Telefono: '+user.telefono+'</p> <p class="card-text">Cantidad a comprar: '+user.compra+'</p> <p class="card-text">Tipo de comprar: '+user.opcion+'</p> <button type="button" class="btn btn-danger" onclick="eliminarUsuario('+ user.id +')"> Eliminar </button> </div> </div> </div>'
        usuarioContainer.innerHTML += content;
    });
}