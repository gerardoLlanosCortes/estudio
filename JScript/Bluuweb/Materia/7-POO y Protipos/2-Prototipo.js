// funcion constructora = plantilla = class

function Persona(nombre){
    this.nombre = nombre

    this.saludar = function() {
        return `Hola soy ${this.nombre}`;
    }

    // this.saludarIngles = function() {
    //     return `Hi, Im ${this.nombre}`
    // }
}

Persona.prototype.saludarIngles = function() {
    return `Hi, Im ${this.nombre}`
}

const juanito = new Persona("juanito")
const pedrito = new Persona("pedrito")
const george = new Persona("george")
console.log(juanito)
console.log(juanito.saludar())
console.log(pedrito.saludar())
console.log(george.saludar())
console.log(george.saludarIngles())