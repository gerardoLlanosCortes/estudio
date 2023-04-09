//Carrito v0 
// const frutas = []
// let fruta = prompt("🍒 Feria Market 🍉 ¿qué fruta desea comprar?")
// frutas.push(fruta)


// while (confirm("¿Desea agregar otro elemento al 🛒?")){
//     let fruta = prompt("¿qué fruta desea comprar?")
//     frutas.push(fruta)
// } ;

// console.log("Usted compró:")
// for (const fruta of frutas) {
//     console.log(fruta)
// }



// Carrito v0 con for each
const frutas = []
let fruta = prompt("🍒 Feria Market 🍉 ¿qué fruta desea comprar?")
frutas.push(fruta)


while (confirm("¿Desea agregar otro elemento al 🛒?")){
    let fruta = prompt("¿qué fruta desea comprar?")
    frutas.push(fruta)
} ;

console.log("Usted compró:")
frutas.forEach(fruta => console.log(fruta))
