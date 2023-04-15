// const url = "https://jsonplaceholder.typicode.com/posts/"

// const findPostById = async (id) => {
//     try{
//         const res = await fetch(url + id)
//         const post = await res.json()
//         console.log(post)
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// findPostById(3)


// fetch(url)
//     .then((res) => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//     .finally(() => console.log("Finalizó"))


//! ejemplo fetch

// const url = "https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON"

// const getAll = async () => {
//     const data = await fetch(url)
//     const dataJson = await data.json()
//     console.log(dataJson)
// }
// getAll()

// fetch(url)
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(err => console.log(err))


//! Fetch
// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err))