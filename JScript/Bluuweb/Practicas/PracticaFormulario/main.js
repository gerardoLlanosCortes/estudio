const formulario = document.querySelector("#formulario")
const userNameId = document.querySelector("#userNameId")
const userEmailID = document.querySelector("#userEmailId")

const regExpName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
const regExpEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/

const nameFeedback = document.getElementById("nameFeedback")
const emailFeedback = document.getElementById("emailFeedback")

formulario.addEventListener(("submit"), e => {

    
    e.preventDefault() 
    
    const isValid = (id, feedback) => {
        id.classList.remove("is-invalid")
        id.classList.add("is-valid")

        feedback.classList.remove("invalid-feedback")
        feedback.classList.add("valid-feedback")
        feedback.textContent = "Looks Good!"
    }

    const isInvalid = (id, feedback, comentario) => {
        id.classList.remove("is-valid")
        id.classList.add("is-invalid")

        feedback.classList.remove("valid-feedback")
        feedback.classList.add("invalid-feedback")
        feedback.textContent = comentario
    }


    if(! regExpName.test(userNameId.value)){
        // agregar clase y mensaje
        isInvalid(userNameId, nameFeedback, "El nombre no es válido")
    }else{
        isValid(userNameId, nameFeedback)
    }

    if(! regExpEmail.test(userEmailID.value)){
        // agregar clase y mensaje
        isInvalid(userEmailID, emailFeedback, "El correo no es válido")
    }else{
        isValid(userEmailID, emailFeedback)
    }   
})