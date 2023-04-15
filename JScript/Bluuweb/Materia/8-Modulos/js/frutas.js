//! IFFE
// (() => {
//     const fruta = "🍌"
//     console.log(fruta)
// })()

//! exportar
const platano = "🍌"

export default platano

export function pintarFrutilla(){
    console.log("🍓")
}

export const manzana = () => {
    console.log("🍎")
}

export class Frutas{
    constructor(nombre){
        this.nombre = nombre
    }
}


// export { sandia, pintarFrutilla}...