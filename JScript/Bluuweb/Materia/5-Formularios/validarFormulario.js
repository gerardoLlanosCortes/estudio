const formulario = document.getElementById("formulario")
const userName = document.getElementById("userName")
const userEmail = document.getElementById("userEmail")

const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/

formulario.addEventListener("submit", e => {
    e.preventDefault()
    console.log(userName.value)
    console.log(userEmail.value)

    if(!regUserName.test(userName.value)){
        console.log("formato no valido")
        return
    }

    if(!regUserEmail.test(userEmail.value)){
        console.log("formato no valido")
        return
    }

    console.log("formulario enviado")
})