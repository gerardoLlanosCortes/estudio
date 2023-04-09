// const lista = document.querySelector("#lista")

//! createElement
// const li = document.createElement("li")
// li.textContent = "texto desde js"
// console.log(li)

//! appendChild
// lista.appendChild(li)

// const arrayPaises = ["Perú", "Bolivia", "Colombia"]

// arrayPaises.forEach(el => {
//     const li = document.createElement("li")
//     li.textContent = el
//     lista.appendChild(li)
// });

//! fragment
// const lista = document.querySelector("#lista")

// const arrayPaises = ["Perú", "Bolivia", "Colombia"]

// const fragment = document.createDocumentFragment()

// arrayPaises.forEach(el => {
//     const li = document.createElement("li")
//     li.textContent = el
//     fragment.appendChild(li)
// });
// lista.appendChild(fragment)

//! insertBefore
const lista = document.querySelector("#lista")

const arrayPaises = ["Perú", "Bolivia", "Colombia"]

const fragment = document.createDocumentFragment()

arrayPaises.forEach(el => {
    const newNode = document.createElement("li")
    newNode.textContent = el
    
    const referenceNode = fragment.firstChild

    fragment.insertBefore(newNode, referenceNode)
});
lista.appendChild(fragment)