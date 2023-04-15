const posts = [
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
];

//! promesas
// const findPostById = (id) => {
//     const post = posts.find(item => item.id === id)

//     return new Promise((resolve, reject) => {
//         if(post) resolve(post)
//         else reject("No existe ese id")
//     })
// } 

// const findPostById = (id) => {
//     return new Promise((resolve, reject) => {
//         const post = posts.find(item => item.id === id)
        
//         if(post) resolve(post)
//         else reject("No hay con ese id")
//     })
// }

// findPostById(1)
//     .then((result) => {
//         console.log(result)
//         return findPostById(2)
//     })
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((err) => {
//         console.log(err)
//     });

//! async await

const findPostById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const post = posts.find(item => item.id === id)
            if(post) resolve(post)
            else reject("No hay con ese id")
        }, 2000); 
    })
}

const buscar = async () => {
    try{
        // const post = await findPostById(id)
        const resPosts = await Promise.all([
            findPostById(1),
            findPostById(2),
            findPostById(3)
        ])
        console.log(resPosts)
    }
    catch(err){
        console.log(err)
    } finally{
        console.log("end-loader")
    }
}

buscar()


// findPostById(1)
//     .then((result) => {
//         console.log(result)
//         return findPostById(2)
//     })
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((err) => {
//         console.log(err)
//     });
