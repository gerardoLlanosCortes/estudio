const containerCardsEstudiantes = document.getElementById("cardsEstudiantes")
const containerCardsProfesores = document.getElementById("cardsProfesores")

const templateEstudiante = document.getElementById("templateEstudiante")
const templateProfesor = document.getElementById("templateProfesor")

const btnAgregar = document.querySelector(".btn-primary")


const estudiantes = []
const profesores = []

const fragmentEstudiantes = document.createDocumentFragment()
const fragmentProfesores = document.createDocumentFragment()


class Persona {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }

    get getNombre(){
        return this.nombre
    }

    set setNombre(nombre){
        this.nombre = nombre
    }

    get getEdad(){
        return this.edad
    }

    set setEdad(edad){
        this.edad = edad
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, estado = "Aprobado"){
        super(nombre, edad)
        this.estado = estado
    }

    get getEstado(){
        return this.estado
    }

    set setEstado(estado){
        this.estado = estado
    }

    cambiarEstado(estado){
        this.estado = estado
    }
}

class Profesor extends Persona {}

const crearEstudiante = (nombre, edad) => {
    estudiantes.push(new Estudiante(nombre, edad))
    pintar()
}

const crearProfesor = (nombre, edad) => {
    profesores.push(new Profesor(nombre, edad))
    pintar()
}


document.addEventListener("click", (e) => {
    if(e.target === btnAgregar){
        e.preventDefault()

        const inputNombre = document.querySelector("input[name='nombre']").value 
        const inputEdad = document.querySelector("input[name='edad']") .value
        const inputOpcion = document.querySelector("select[name='opcion']") .value
        
        if(inputOpcion === "Estudiante"){
            crearEstudiante(inputNombre,inputEdad)
        } else{
            crearProfesor(inputNombre,inputEdad)
        } 
            
    }

    if(e.target.classList[1] === "btn-success"){
        const search = e.target.parentElement.querySelector(".text-primary").textContent

        estudiantes.forEach((estudiante) => {
            if(estudiante.getNombre === search){
                estudiante.cambiarEstado("Aprobado")
            }
        })
        
        pintar()
    }

    if(e.target.classList[1] === "btn-danger"){
        const search = e.target.parentElement.querySelector(".text-primary").textContent

        estudiantes.forEach((estudiante) => {
            if(estudiante.getNombre === search){
                estudiante.cambiarEstado("Reprobado")
            }
        })

        pintar()
    }
    // console.log(btnAprobar)

    // if(e.target === btnReprobar){
    //     console.log(e.target)

    // }

})

const pintar = () => {

    containerCardsEstudiantes.textContent = "" 
    containerCardsProfesores.textContent = "" 

    estudiantes.forEach((estudiante) => {
        const clone = templateEstudiante.content.cloneNode(true)
        clone.querySelector(".text-primary").textContent = estudiante.getNombre
        clone.querySelector(".badge").textContent = estudiante.getEstado
        clone.querySelector(".lead").textContent = estudiante.getEdad

        if(clone.querySelector(".badge").textContent === "Aprobado"){
            clone.querySelector(".badge").classList.remove("bg-danger")
            clone.querySelector(".badge").classList.add("bg-success")
        }else{
            clone.querySelector(".badge").classList.remove("bg-success")
            clone.querySelector(".badge").classList.add("bg-danger")
        }

        fragmentEstudiantes.appendChild(clone)
    })

    profesores.forEach((profesor) => {
        const clone = templateProfesor.content.cloneNode(true)
        clone.querySelector(".card-body h5").textContent = profesor.getNombre
        clone.querySelector(".lead").textContent = profesor.getEdad
        
        fragmentProfesores.appendChild(clone)
    })

    containerCardsEstudiantes.appendChild(fragmentEstudiantes)
    containerCardsProfesores.appendChild(fragmentProfesores)
}
