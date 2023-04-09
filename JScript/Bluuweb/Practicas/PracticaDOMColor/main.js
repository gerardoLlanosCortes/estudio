let inputColor = document.getElementById("inputColor")
let btnColor = document.getElementById("btnColor")
let textColor = document.getElementById("textColor")
let divColor = document.getElementById("divColor")

btnColor.addEventListener("click", () => {
    textColor.textContent = inputColor.value
    divColor.style.backgroundColor = inputColor.value
})

textColor.addEventListener("click", () => {
    navigator.clipboard.writeText(textColor.textContent)
    alert(`Color ${textColor.textContent} copiado`)
})

