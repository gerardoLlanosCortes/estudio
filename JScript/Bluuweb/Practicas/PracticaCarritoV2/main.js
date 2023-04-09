const contenedorLista = document.getElementById("carrito")
const template = document.getElementById("template")
const btns = document.querySelectorAll(".btn")
const fragment = document.createDocumentFragment()
const carrito = []

btns.forEach((btn) => {
    btn.addEventListener(("click"), (e) => {
        agregarProducto(e)
    })
})

const agregarProducto = (e) => {
    
    producto = {
        id: e.target.dataset.fruta,
        nombre: e.target.dataset.fruta,
        cantidad: 1
    }

    const indice = carrito.findIndex((producto) => producto.nombre === e.target.dataset.fruta)

    if(indice === -1){
        carrito.push(producto)
    }else{
        carrito[indice].cantidad += 1
    }

    pintarCarro()

}

const pintarCarro = () => {

    contenedorLista.textContent = ""

    carrito.forEach((producto) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".lead").textContent = producto.nombre;
        clone.querySelector(".badge").textContent = producto.cantidad;
        fragment.appendChild(clone);
    })

    contenedorLista.appendChild(fragment)
}

