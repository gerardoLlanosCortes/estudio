class Persona {
    constructor(nombre){
        this.nombre = nombre
    }

    get getNombre(){
        return this.nombre
    }

    set setNombre(nombre){
        return this.nombre = nombre
    }

    saludar(){
        return `${this.nombre} dice hola`
    }
} 

const juanito = new Persona("juanito")
// juanito.nombre = "pedrito"
console.log(juanito.getNombre)
juanito.setNombre = "pedrito"
console.log(juanito.getNombre)


