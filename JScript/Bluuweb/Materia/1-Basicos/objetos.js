// const gato = {
//     nombre: "valiente",
//     duerme: true,
//     edad: 10,
//     enemigos: ["agua", "perros"]
// }

// console.log(gato)
// console.log(gato.duerme)
// console.log(gato.enemigos[1])
// console.log(gato["nombre"])
// console.log(gato["enemigos"][1])


//! ===== CRUD =====
// Create
// gato.color = "negro"

//! ---- Read ----
// console.log(gato.color)

//! ---- Update ----
// gato.nombre = "feliz"
// console.log(gato)

//! ---- Delete ----
// delete gato.color
// console.log(gato)

//! Objeto anidado
// const gato = {
//     nombre: "valiente",
//     duerme: true,
//     edad: 10,
//     enemigos: ["agua", "perros"],
//     otros: {
//         amigos: ["cobarde", "timido"],
//         comida: {
//             frio: "salmon",
//             caliente: "pollo"
//         }
//     }
// }
// console.log(gato.otros.comida.caliente)
// console.log(gato.otros.amigos[0])


//! Métodos
// const gato = {
//     nombre: "valiente",
//     duerme: true,
//     edad: 10,
//     enemigos: ["agua", "perros"],
//     otros: {
//         amigos: ["cobarde", "timido"],
//         comida: {
//             frio: "salmon",
//             caliente: "pollo"
//         }
//     },
//     comer(comida) {
//         return `${this.nombre} está comiendo ${comida}`
//     }
// }

// console.log(gato.comer("pez"))

//! For in
// for (const propiedad in gato) {
//     console.log(gato[propiedad]);
// }

//! Object.value
// console.log(Object.values(gato))

//! Con foreach
// Object.values(gato).forEach((item) => console.log(item));


//! Destructuración de objetos
// const gato = {
//     nombre: "valiente",
//     duerme: true,
//     edad: 10,
//     enemigos: ["agua", "perros"],
//     otros: {
//         amigos: ["cobarde", "timido"],
//         comida: {
//             frio: "salmon",
//             caliente: "pollo"
//         }
//     },
//     comer(comida) {
//         return `${this.nombre} está comiendo ${comida}`
//     }
// }

// const {nombre : nombreSuperGato = "sin nombre", edad } = gato
// console.log(nombreSuperGato, edad)

// const {amigos: amigosArray} = gato.otros
// console.log(amigosArray)

// const [amigoUno, amigoDos] = amigosArray
// console.log(amigoUno)


//! Getter y setter
// const gato = {
//     nombre: "valiente",
//     duerme: true,
//     edad: 10,
//     enemigos: ["agua", "perros"],
//     otros: {
//         amigos: ["cobarde", "timido"],
//         comida: {
//             frio: "salmon",
//             caliente: "pollo"
//         }
//     },
//     comer(comida) {
//         return `${this.nombre} está comiendo ${comida}`
//     },
//     get nombreMayuscula () {
//         return this.nombre.toUpperCase()
//     },
//     set agregarAmigo(nuevoAmigo) {
//         this.otros.amigos.unshift(nuevoAmigo)
//     }
// }

// gato.agregarAmigo = "Yo" 
// console.log(gato.nombreMayuscula)
// console.log(gato.otros.amigos)

//! por valor vs por referencia
// let a = "hola"
// let b = a
// a = "chao"
// console.log(b)

// let a = ["hola"]
// let b = a
// a.push("chao")
// console.log(b)