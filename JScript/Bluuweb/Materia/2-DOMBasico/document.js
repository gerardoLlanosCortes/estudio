//! Document
console.log(document)
console.log(document.head)
console.log(document.title)

// Algunos métodos:
// Document.getElementsByClassName(String className)
// Document.getElementsByTagName(String tagName)
// Document.getElementById(String id)
// Document.querySelector(String selector)
// Document.querySelectorAll(String selector)
// Document.createDocumentFragment()
// Document.createElement(String name)

//! getElementById
console.log(document.getElementById("tituloWeb"))
console.log(document.getElementById("tituloWeb").textContent)
console.log(document.getElementById("tituloWeb").innerHTML)

//! DocumentContentLoaded

//! querySelector
console.log(document.querySelector("#tituloWeb"))

//! addEventListener
let btn = document.querySelector("#boton")
let p = document.querySelector("#parrafo")

btn.addEventListener("click", () => {
    p.textContent = "elemento desde JS"
})