// const padre = document.querySelector(".border-primary")
// const hijo = document.querySelector(".border-secondary")
// const nieto = document.querySelector(".border-danger")

// padre.addEventListener(("click"), () => {
//     console.log("me diste click padre")
// })

// hijo.addEventListener(("click"), () => {
//     console.log("me diste click hijo")
// })

// nieto.addEventListener(("click"), () => {
//     console.log("me diste click nieto")
// })

//! con foreach pasa lo mismo
// const cajitas = document.querySelectorAll(".border")

// cajitas.forEach((cajita) => {
//     cajita.addEventListener(("click"), () => {
//         console.log("Hola")
//     })
// })

//! stop propagation
// const cajitas = document.querySelectorAll(".border")

// cajitas.forEach((cajita) => {
//     cajita.addEventListener(("click"), (e) => {
//         e.stopPropagation()
//         console.log("Hola")
//     })
// })

//! prevent default
// const formulario = document.querySelector("form")

// formulario.addEventListener(("submit"), e => {
//     console.log("me diste click")
//     e.preventDefault()
// } )

//! delegacion de eventos
// const container = document.querySelector(".container")

// container.addEventListener(("click"), e =>{
//     if(e.target.id === "padre"){
//         console.log("diste click al padre")
//     }

//     if(e.target.matches(".border-danger")){
//         console.log("diste click al nieto")
//     }

//     if(e.target.dataset.div === "divHijo"){
//         console.log("diste click al hijo")
//     }

// })