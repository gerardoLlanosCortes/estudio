fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(res => res.json())
    .then(res => console.log(res.forms[0].name))
    .catch(err => console.log(err))

const getDitto = async () => {
    const data = (await fetch("https://pokeapi.co/api/v2/pokemon/ditto")).json()
    const dataJson = await data
    console.log(dataJson)
}
getDitto()