//! MAP -> crea un nuevo actual con las modificaciones del original
// const frutas = ["🍌", "🍏", "🍓"];

// const nuevoArray = frutas.map((item) => {
//     return item
// })

// console.log(nuevoArray)


// ==== en objetos ====
// const users = [
//     { uid: 1, name: "John", age: 34 },
//     { uid: 2, name: "Amy", age: 20 },
//     { uid: 3, name: "camperCat", age: 10 },
// ];
// const names = users.map((user) => user.name);
// console.log(names);

// const ages = users.map(users => users.age)
// console.log(ages)


//! Filter -> Crea un nuevo array con la condicion dada
// const mayores = users.filter((user) => {
//     return user.age >= 18
// })
// console.log(mayores)

// eliminar con filter
// const userFiltrado = users.filter(user => user.name !== "John")
// console.log(userFiltrado)


//! Find -> Devuelve el primero que concuerda
// const {age} = users.find(user => user.name === "Amy")
// console.log(age)


//! some -> comprueba si al menos un elemento del arreglo cumple
// const existe = users.some((user) => user.uid === 2)
// console.log(existe)

//! findIndex -> Devuelve el indicio o -1
// const indice = users.findIndex((user) => user.uid === 4)
// console.log(indice)

//! Slice -> Divide el array 
// const arr = ["Cat", "Dog", "Tiger", "Zebra"]
// const arrayNuevo = arr.slice(1,3)
// console.log(arrayNuevo)

//! Concat -> se usa para unir dos o más arrays. 
// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];
// const nuevoArray =  
// console.log(nuevoArray)

//! spread Operator -> permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde son esperados.
// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];
// const nuevoArray =  [...array1, ...array2]
// console.log(nuevoArray)

//! Reduce -> ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
// const numeros = [1,2,3,4,5]
// const sumar = numeros.reduce((acc, current) => acc + current)
// console.log(sumar)

// const arrayNumeros = [
//     [0, 1],
//     [2, 3],
//     [4, 5],
// ];

// const arrayPlano = arrayNumeros.reduce((acc, current) => [...acc, ...current])
// console.log(arrayPlano)

// const arrayPlano = [].concat(...arrayNumeros)
// console.log(arrayPlano)

// const  arrayFlat = arrayNumeros.flat()
// console.log(arrayFlat)

//! split -> string a array

const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
const arrayMeses = cadenaMeses.split(",")
console.log(arrayMeses)

//! join -> array a string
cadenaGuion = arrayMeses.join("-")
console.log(cadenaGuion)