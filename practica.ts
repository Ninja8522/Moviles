class Ciudadano{
    public nombre: string;
    public edad: number;
    constructor(nombre: string, edad: number ){
        this.nombre =nombre;
        this.edad = edad;
    }
}

interface Soldado extends Ciudadano {
    posicion: string;
    rango: string;
}

interface Policia extends Ciudadano {
    grupo: string;
    especializacion: string;
}


function seguridad(ciudadanoP: Policia,ciudadanoS: Soldado){
    console.log("Policia " + ciudadanoP.nombre +" "+"tu eres del grupo: " + ciudadanoP.grupo +" ," +" tu especializacion es: " + ciudadanoP.especializacion + " "  + "y tu edad es: " + ciudadanoP.edad);
    return "Soldado " + ciudadanoS.nombre +" "+"tu posicion es: " + ciudadanoS.posicion +" ," +" tu rango es: " + ciudadanoS.rango + " "  + "y tu edad es: " + ciudadanoS.edad;
}

let police: Policia ={nombre:"Pepito", grupo:"Uniformado", especializacion:"Fraudes", edad: 32};
let soldier: Soldado={nombre: "Juan", posicion: "Logistica", rango:"Cabo Mayor",edad: 56};

document.body.textContent = seguridad(police,soldier);
