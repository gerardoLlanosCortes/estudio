const lista = document.querySelector("#lista")
const arrayPaises = ["Perú", "Bolivia", "Colombia"]
const liTemplate = document.querySelector("#liTemplate")
const fragment = document.createDocumentFragment()

const clickPaises = () => console.log("me diste click")


arrayPaises.forEach((pais) => {
    const clone = liTemplate.content.firstElementChild.cloneNode(true)
    clone.querySelector("span").textContent = pais

    clone.addEventListener("click", clickPaises)

    fragment.appendChild(clone)
})

lista.appendChild(fragment)








// clone.querySelector("span").textContent = "elemento desde JS"

// lista.appendChild(clone)

