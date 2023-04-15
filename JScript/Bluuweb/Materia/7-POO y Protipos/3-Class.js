class Persona {
    constructor(nombre){
        this.nombre = nombre
    }

    saludar(){
        return `${this.nombre} dice hola`
    }
} 

const juanito = new Persona("juanito")
const pedrito = new Persona("pedrito")
console.log(juanito)
console.log(pedrito)

