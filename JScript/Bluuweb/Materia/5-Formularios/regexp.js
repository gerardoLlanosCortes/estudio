const regExp = /bluuweb/i

//! el i Ignora  mayusuculas y minusculas
const regExpObjeto = new RegExp("bluuweb", "i")

//! [] usca u y e 
const regExp2 = /[ue]/i

//! | busca cualquiera de los dos
const regExp3 = /bluuweb|bluweb/i

//! testear
console.log(regExp3.test("bluweb"))