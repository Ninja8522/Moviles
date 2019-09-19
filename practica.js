var Ciudadano = /** @class */ (function () {
    function Ciudadano(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    return Ciudadano;
}());
function seguridad(ciudadanoP, ciudadanoS) {
    console.log("Policia " + ciudadanoP.nombre + " " + "tu eres del grupo: " + ciudadanoP.grupo + " ," + " tu especializacion es: " + ciudadanoP.especializacion + " " + "y tu edad es: " + ciudadanoP.edad);
    return "Soldado " + ciudadanoS.nombre + " " + "tu posicion es: " + ciudadanoS.posicion + " ," + " tu rango es: " + ciudadanoS.rango + " " + "y tu edad es: " + ciudadanoS.edad;
}
var police = { nombre: "Pepito", grupo: "Uniformado", especializacion: "Fraudes", edad: 32 };
var soldier = { nombre: "Juan", posicion: "Logistica", rango: "Cabo Mayor", edad: 56 };
document.body.textContent = seguridad(police, soldier);
