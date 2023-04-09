const arrayPaises = ["Chile", "Bolivia", "Perú", "Argentina"]

const container = document.querySelector(".container")
const frament = document.createDocumentFragment()

arrayPaises.forEach((pais) => {
    const li = document.createElement("li")
    li.classList.add("list")

    const b = document.createElement("b")
    b.textContent = "País: "

    const span = document.createElement("span")
    span.classList.add("text-primary")
    span.textContent = pais

    li.append(b,span)

    console.log(li)

    frament.appendChild(li)
})

container.appendChild(frament)

