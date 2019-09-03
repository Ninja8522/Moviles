var calificacion = 0;
var materiasEvaluar = document.getElementsByClassName('materiasEvaluar');
bandera = true;
var materias = document.getElementById('materiasDinamicas');
const materiasReg =[];

function promedio() {
    for(var i=0; materiasEvaluar[i]; i++){
        calificacion += parseInt(materiasEvaluar[i].value);
    }

    console.log('Suma es: '+ calificacion);

    var resultado = calificacion / materiasEvaluar.length;
    alert('Tu promedio es: ' + resultado);

    materias.innerHTML = '';
    usuario = document.getElementById('nombre').value;
    carrera = document.getElementById('carrera').value;
    m1 = document.getElementById('redes').value;
    m2 = document.getElementById('basesDatos').value;
    m3 = document.getElementById('matematicas').value;
    m4 = document.getElementById('movil').value;
    m5 = document.getElementById('web').value;

    alumnoNuevo = {
        usuario,
        carrera,
        m1,
        m2,
        m3,
        m4,
        m5,
        calificacion,
        resultado
    }

    materiasReg.push(alumnoNuevo);
    materiasReg.forEach(alumno =>{
        const content = '<div class="p-2"> <div class="card" style=" width: 18rem;"> <div class="card-body"> <h5 class="card-title">Usuario:'+ alumno.usuario +'</h5> <h6 class="card-subtitle mb-2 text-muted">Carrera:'+alumno.carrera+'</h6> <p class="card-text">Calificacion redes:'+alumno.m1+'</p> <p class="card-text">Calificacion base de datos:'+alumno.m2+'</p> <p class="card-text">Calificacion matematicas:'+alumno.m3+'</p> <p class="card-text">Calificacion programacion movil:'+alumno.m4+'</p> <p class="card-text">Calificacion programacion web:'+alumno.m5+'</p> <p class="card-text">Calificacion:'+alumno.calificacion+'</p> <p class="card-text">Promedio:'+alumno.resultado+'</p> <a href="#" class="card-link">Revisar</a> </div> </div> </div>'
         materias.innerHTML += content;
    });
    calificacion = 0;
    resultado = 0;
}