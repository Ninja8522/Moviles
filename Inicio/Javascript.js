const salones = [{
    nombreAula: 'B1',
    capacidadAula: 20,
    grupoAsignado: 'ISDI'
}, {
    nombreAula: 'B2',
    capacidadAula: 30,
    grupoAsignado: 'Fisios'
}];

const alumnosRegistrados =[];
const container = document.getElementById('tarjetasDinamicas');
var alumnosDinamico = document.getElementById('alumnosDinamicos');
bandera = true;
datos = true;
const materias = document.getElementsByClassName('clasesEscuela');

function saludos(nombre) {
    var checkedValue ="";

    if(document.getElementById('r1').checked){
        valueTipo=document.getElementById('r1').value;
    } else{
        valueTipo=document.getElementById('r2').value;
    }

    for (var i = 0; materias[i]; i++){
        if(materias[i].checked){
            checkedValue = checkedValue + materias[i].value + ", ";
        }
    }

    if(bandera != false){
        salones.forEach(salon =>{
            const content = ' <div class="p-2"> <div class="card" style=" width: 18rem;"> <div class="card-body"> <h5 class="card-title">Salon:'+ salon.nombreAula +'</h5> <h6 class="card-subtitle mb-2 text-muted">Grupo asignado:'+salon.grupoAsignado+'</h6>  <p class="card-text">Capacidad del salon:'+salon.capacidadAula+'</p> <a href="#" class="card-link">Revisar</a> </div> </div> </div>'
            container.innerHTML += content;
        });
    }

    bandera = false;
    //if(datos != false){
        document.getElementById('p1').innerHTML = 'Hola ' + nombre;
        document.getElementById('p2').innerHTML= 'Tu eres ' +valueTipo;
        document.getElementById('p3').innerHTML ='Tus clases son: '+ checkedValue;
    //}
    datos = false;
}   
function Registrar(){

    alumnosDinamico.innerHTML = '';
    usuario = document.getElementById('nombre').value;
    correo = document.getElementById('email').value;
    password = document.getElementById('password').value;
    var materiasSeleccionadas = '';

    for (var i = 0; materias[i]; i++){
        if(materias[i].checked){
            materiasSeleccionadas = materiasSeleccionadas + materias[i].value + ", ";
        }
    }

    alumnoNuevo = {
        usuario,
        correo,
        password,
        materiasSeleccionadas
    }

    alumnosRegistrados.push(alumnoNuevo);

    alumnosRegistrados.forEach(alumno =>{
        const content = ' <div class="p-2"> <div class="card" style=" width: 18rem;"> <div class="card-body"> <h5 class="card-title">Usuario:'+ alumno.usuario +'</h5> <h6 class="card-subtitle mb-2 text-muted">Correo:'+alumno.correo+'</h6>  <p class="card-text">Materias:'+alumno.materiasSeleccionadas+'</p> <a href="#" class="card-link">Revisar</a> </div> </div> </div>'
        alumnosDinamico.innerHTML += content;
    });
    
}