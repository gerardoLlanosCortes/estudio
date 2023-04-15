const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const footer = document.querySelector("#footer")
const templateFooter = document.querySelector("#templateFooter")
const fragment = document.createDocumentFragment();

let carritoArray = [];

document.addEventListener(("click"), e => {
    if(e.target.matches(".card .btn-outline-primary")){
        agregarCarrito(e)
    }

    if(e.target.matches(".list-group-item .btn-success")){
        btnAumentar(e)
    }

    if(e.target.matches(".list-group-item .btn-danger")){
        btnDisminuir(e)
    }
})

const agregarCarrito = (e) => {
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio)
    };

    // buscamos el indice
    const index = carritoArray.findIndex((item) => item.id === producto.id);

    // si no existe empujamos el nuevo elemento
    if (index === -1) {
        carritoArray.push(producto);
    } else {
        // en caso contrario aumentamos su cantidad
        carritoArray[index].cantidad++;
        // carritoArray[index].precio = producto.precio * carritoArray[index].cantidad;
    }

    console.log(carritoArray);

    pintarCarrito();
};


const pintarCarrito = () => {
    carrito.textContent = "";

    // recorremos el carrito y pintamos elementos:
    carritoArray.forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".text-white .lead").textContent = item.titulo;
        clone.querySelector(".badge").textContent = item.cantidad;
        clone.querySelector("div .lead span").textContent = item.precio * item.cantidad

        clone.querySelector(".btn-danger").dataset.id = item.id
        clone.querySelector(".btn-success").dataset.id = item.id
        fragment.appendChild(clone);
    });
    carrito.appendChild(fragment);
    pintarFooter()
};


const pintarFooter = () => {
    footer.textContent = ""
    
    const total = carritoArray.reduce((acc, current) =>{
        acc + current.cantidad * current.precio, 0 
    })
    
    const clone = templateFooter.content.cloneNode(true);
    clone.querySelector("span").textContent = total

    footer.appendChild(clone)
}

const btnAumentar = (e) => {
    carritoArray = carritoArray.map(item => {
        if(item.id === e.target.dataset.id){
            item.cantidad ++
        }
        return item
    })

    pintarCarrito()
}

const btnDisminuir = (e) => {
    carritoArray = carritoArray.filter(item => {
        if(item.id === e.target.dataset.id){
            if(item.cantidad > 0){
                item.cantidad--
                if(item.cantidad === 0) return;
                return item
            }
        }else{
            return item
        }
    })

    pintarCarrito()
}