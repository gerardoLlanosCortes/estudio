const contenedorLista = document.querySelector("#carrito")
const contenedorFooter = document.querySelector("#footer")

const templateFooter = document.querySelector("#templateFooter")
const templateLista = document.querySelector("#template")

const fragment = document.createDocumentFragment()
const fragmentTotal = document.createDocumentFragment()

const productosLista = document.querySelectorAll(".btn-primary")

const carrito = []


document.addEventListener("click", e => {
    if(e.target.matches(".btn-primary")){
        agregarProducto(e)
    }

    if(e.target.matches(".btn-success")){
        sumarProducto(e)
    }

    if(e.target.matches(".btn-danger")){
        restarProducto(e)
    }

    if(e.target.matches(".btn-outline-primary")){
        console.log("Compra realizada con exito")
    }
})

const agregarProducto = (e) => {
    const producto = {
        id: e.target.dataset.fruta,
        nombre: e.target.dataset.fruta,
        precio: Number(e.target.dataset.precio),
        cantidad: 1
    }

    const indice = carrito.findIndex(fruta => fruta.id === producto.id)

    if(indice === -1){
        carrito.push(producto)
    }else{
        carrito[indice].cantidad ++
        carrito[indice].precio += producto.precio
    }
    
    pintarCarro()
}

const pintarCarro = () => {
    contenedorLista.textContent = ""
    let total = 0

    carrito.forEach((producto) => {
        const clone = templateLista.content.firstElementChild.cloneNode(true)
        clone.querySelector(".badge").textContent = producto.cantidad
        clone.querySelector("#nombreItem").textContent = producto.nombre
        clone.querySelector("#totalLista").textContent = producto.precio
        total += producto.precio

        fragment.appendChild(clone)
    })

    pintarTotal(total)

    contenedorLista.appendChild(fragment)
}

const pintarTotal = (total) => {
    if(total == 0){
        contenedorFooter.textContent = ""
    }else{
        contenedorFooter.textContent = ""
        const clone = templateFooter.content.firstElementChild.cloneNode(true)
        clone.querySelector(".lead span").textContent = total
        contenedorFooter.appendChild(clone)
    }
}

const sumarProducto = (e) => {
    const section = e.target.parentElement.parentElement.parentElement
    const productoNombre = section.querySelector("#nombreItem").textContent
    const indice = carrito.findIndex(fruta => fruta.id === productoNombre)
    productosLista.forEach((producto) => {
        if(producto.dataset.fruta === productoNombre){
            carrito[indice].cantidad ++
            carrito[indice].precio += Number(producto.dataset.precio)  
        }
    })

    pintarCarro()
}

const restarProducto = (e) => {
    const section = e.target.parentElement.parentElement.parentElement
    const productoNombre = section.querySelector("#nombreItem").textContent
    const indice = carrito.findIndex(fruta => fruta.id === productoNombre)
    productosLista.forEach((producto) => {
        if(producto.dataset.fruta === productoNombre){
            carrito[indice].precio -= Number(producto.dataset.precio)  
            carrito[indice].cantidad --
            if(carrito[indice].cantidad === 0){
                carrito.splice(indice,1)
                pintarCarro()
            }else{
                pintarCarro()
            }
        }
    })

}