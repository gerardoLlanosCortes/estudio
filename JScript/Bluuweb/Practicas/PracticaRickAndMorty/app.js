const templateCard = document.getElementById("templateCard")
const containerCards = document.getElementById("containerCards")
const sectionLoader = document.getElementById("loading")
const fragmet = document.createDocumentFragment()

const url = "https://rickandmortyapi.com/api/character/"

document.addEventListener("DOMContentLoaded", () => {
    getAll()
})

const getAll = async (id) => {
    try{
        loader(true)
        const data = (await fetch(url)).json()
        const dataJson = await data
        pintarDatos(dataJson.results)
    }
    catch(err){
        console.log(err)
    }
    finally{
        loader(false)
    }
}

const loader = (estado) => {
    if(estado){
        sectionLoader.classList.remove("d-none")
    }else{
        sectionLoader.classList.add("d-none")
    }
}


const pintarDatos = (arrayData) => {
    arrayData.forEach(character =>{
        const clone = templateCard.content.cloneNode(true)

        containerCards.textContent = ""

        clone.querySelector("img").src = character.image
        clone.querySelector(".card-body .card-title").textContent = character.name
        clone.querySelector(".card-body p").textContent = character.species

        fragmet.appendChild(clone)

    })

    containerCards.appendChild(fragmet)

}

