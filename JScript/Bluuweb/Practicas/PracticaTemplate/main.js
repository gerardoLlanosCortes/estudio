const contenedorLista = document.getElementById("carrito") 
const template = document.getElementById("liTemplate")
const btns = document.querySelectorAll(".btn")

const fragment = document.createDocumentFragment()

let carritoObjeto = {}

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        agregarAlCarro(e)
    })
})

const agregarAlCarro = (e) => {

    producto = {
        id: e.target.dataset.fruta,
        nombre: e.target.dataset.fruta,
        cantidad: 1
    }

    if(carritoObjeto.hasOwnProperty(producto.id)){
        producto.cantidad = carritoObjeto[producto.id].cantidad + 1
    }

    carritoObjeto[producto.id] = producto

    pintarCarro()
}

const pintarCarro = () => {

    contenedorLista.textContent = ""

    Object.values(carritoObjeto).forEach((producto) => {
        const clone = template.content.cloneNode(true)
        clone.querySelector(".lead").textContent = producto.id;
        clone.querySelector(".rounded-pill").textContent = producto.cantidad;

        fragment.appendChild(clone)

    })

    contenedorLista.appendChild(fragment)

}

