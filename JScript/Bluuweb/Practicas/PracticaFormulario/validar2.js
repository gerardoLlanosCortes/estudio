const formulario = document.getElementById("formulario")
const userName = document.getElementById("userName")
const userEmail = document.getElementById("userEmail")

const alertSuccess = document.getElementById("alertSuccess")
const alertEmail = document.getElementById("alertEmail")
const alertName = document.getElementById("alertName")

const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/

const pintarMensajeExsito = () => {
    alertSuccess.classList.remove("d-none")
    alertSuccess.textContent = "Mensaje enviado con éxito"
}

const pintarMensajeError = (errores) => {
    errores.forEach((item) => {
        item.tipo.classList.remove("d-none")
        item.tipo.textContent = item.msg
    })
}

formulario.addEventListener("submit", e => {
    e.preventDefault()

    alertSuccess.classList.add("d-none")

    const errores = []

    
    if(!regUserName.test(userName.value) || userName.value.trim()){
        item.tipo.classList.add("is-invalid")
        errores.push({
            tipo: alertName,
            msg: "Formato no válido en el campo nombre, solo letras"
        })
    }else{
        userName.classList.remove("is-invalid")
        userName.classList.add("is-valid")
        alertName.classList.add("d-none")

    }

    if(!regUserEmail.test(userEmail.value) || userEmail.value.trim()){
        item.tipo.classList.add("is-invalid")
        errores.push({
            tipo: alertEmail,
            msg: "Formato no válido en el campo correo"
        })
    }else{
        userEmail.classList.remove("is-invalid")
        userEmail.classList.add("is-valid")
        alertEmail.classList.add("d-none")
    }

    if(errores.length !== 0){
        pintarMensajeError()
        return 
    }

    pintarMensajeExsito()
})