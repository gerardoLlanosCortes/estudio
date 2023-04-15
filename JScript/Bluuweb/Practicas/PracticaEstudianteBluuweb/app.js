const formulario = document.getElementById("formulario")
const cardsEstudiantes = document.getElementById("cardsEstudiantes")
const cardsProfesores = document.getElementById("cardsProfesores")
const templateEstudiante = document.getElementById("templateEstudiante").content
const templateProfesor = document.getElementById("templateProfesor").content

const alert = document.querySelector(".alert")


const estudiantes = [] 
const profesores = []

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
        this.uid = `${Date.now()}`
    }

    static pintarPersonaUI(personas, tipo){
        if(tipo === "Estudiante"){
            cardsEstudiantes.textContent = ""
            const fragment = document.createDocumentFragment()

            personas.forEach((persona) => {
                fragment.appendChild(persona.agregarNuevoEstudiante())
            })

            cardsEstudiantes.appendChild(fragment)
        }

        if(tipo === "Profesor"){
            cardsProfesores.textContent = ""
            const fragment = document.createDocumentFragment()

            profesores.forEach(profesor => {
                fragment.appendChild(profesor.agregarNuevoProfesor())
            })

            cardsProfesores.appendChild(fragment)
        }
    }
}

class Estudiante extends Persona {
    #estado = false
    #estudiante = "Estudiante"

    set setEstado(estado){
        this.#estado = estado
    }

    get getEstudiante(){
        return this.#estudiante
    }

    agregarNuevoEstudiante(){
        const clone = templateEstudiante.cloneNode(true)
        clone.querySelector(".text-primary").textContent = this.nombre
        clone.querySelector(".lead").textContent = this.edad

        if(this.#estado){
            clone.querySelector(".btn-success").className = "btn btn-success disabled"
            clone.querySelector(".btn-danger").className = "btn btn-danger"
            clone.querySelector(".badge").className = "badge bg-success"

        }else{
            clone.querySelector(".btn-danger").className = "btn btn-danger disabled"
            clone.querySelector(".btn-success").className = "btn btn-success"
            clone.querySelector(".badge").className = "badge bg-danger"            
        }

        clone.querySelector(".badge").textContent = this.#estado ? "Aprobado" : "Reprobado"

        clone.querySelector(".btn-success").dataset.uid = this.uid
        clone.querySelector(".btn-danger").dataset.uid = this.uid

        return clone
    }
}

class Profesor extends Persona {

    #profesor = "Profesor"

    agregarNuevoProfesor(){
        const clone = templateProfesor.cloneNode(true)
        clone.querySelector("h5").textContent = this.nombre
        clone.querySelector(".lead").textContent = this.edad

        return clone
    }
}

document.addEventListener(("click"), (e) => {
    if(e.target.dataset.uid){
        if(e.target.matches(".btn-success")){
            estudiantes.map(item => {
                if(item.uid === e.target.dataset.uid){
                    item.setEstado = true
                }
                return item
            })
            
        }

        if(e.target.matches(".btn-danger")){
            estudiantes.map(item => {
                if(item.nombre === e.target.dataset.nombre){
                    item.setEstado = false
                }
                return item
            })
        }

        Persona.pintarPersonaUI(estudiantes, "Estudiante")
    }
})


formulario.addEventListener("submit", e => {
    e.preventDefault()

    alert.classList.add("d-none")

    const datos = new FormData(formulario)
    const [nombre, edad, opcion] = [...datos.values()]

    if(!nombre.trim() || !edad.trim()){
        alert.classList.remove("d-none")
        return
    }

    if(opcion === "Estudiante"){
        const estudiante = new Estudiante(nombre, edad)
        estudiantes.push(estudiante)
        Persona.pintarPersonaUI(estudiantes, opcion)
    }

    if(opcion === "Profesor"){
        const profesor = new Profesor(nombre, edad)
        profesores.push(profesor)
        Persona.pintarPersonaUI(profesores, opcion)
    }
    
})
