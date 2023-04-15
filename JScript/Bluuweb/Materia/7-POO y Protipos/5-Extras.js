class Persona {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
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

    static probarSaludo(nombre){
        return `${nombre} está saludando`
    }
} 


class Estudiante extends Persona {
    
    #notas = []

    set setNotas(nota){
        this.#notas.push(nota)
    }

    get getNotas(){
        return this.#notas
    }

    saludar(){
        return `${this.nombre} desde estudiante`
    }
}

console.log(Persona.probarSaludo("nacho"))

const juanito = new Estudiante("juanito", 25)
juanito.setNotas = 7
console.log(juanito)
// console.log(juanito.#notas)
console.log(juanito.getNotas)
console.log(juanito.saludar())
// juanito.nombre = "pedrito"
// console.log(juanito.getNombre)
// juanito.setNombre = "pedrito"
// console.log(juanito.getNombre)



