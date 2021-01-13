// los array se marcan con estos corchetes[]


var mauro = {
    nombre: 'Mauro',
    apellido: 'Nieto',
    altura: 1.56,
    cantidadDelibros:234
}

var camila = {
    nombre: 'camila',
    apellido: 'cardenas',
    altura: 1.55,
    cantidadDelibros:287
}

var cris = {
    nombre: 'cris',
    apellido: 'van',
    altura: 1.77,
    cantidadDelibros:209
}

var camilo = {
    nombre: 'Camilo',
    apellido: 'Ramirez',
    altura: 1.73,
    cantidadDelibros:127
}

var leo = {
    nombre: 'Leo',
    apellido: 'Perez',
    altura: 1.78,
    cantidadDelibros:98
}


const esAlta = ({altura}) => altura > 1.7
const esBaja = ({altura}) => altura < 1.7
 
var personas = [camila, mauro, cris, leo, camilo]

// for(var i = 0; i < personas.length; i++) {
//     var persona = personas[i]
//     console.log(`${persona.nombre} mide ${persona.altura}mts`)
// }

// FILTRAR OBJETOS DE ARRAY  con filter

// var personasBajas = personas.filtrer(esBaja)
var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)


// usaremos la funcion map
// const pasarAlturaACms = persona => {
// en el primer caso se crea una lista pero remplaza la anterior 
// persona.altura *= 100
//     return persona
// }

// en este si se desgloza gracias a una funcion la lista prinicipal creando una nueva 
const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100

})

var personasCms = personas.map(pasarAlturaACms)



// console.log(personasAltas)
// console.log(personasBajas)

console.log(personasCms)





// acum

// var acum = 0

// for (var i = 0; i < personas.length; i++){
//     acum = acum + personas[i].cantidadDelibros
// }

// console.log(`En total todos tiene ${acum} libros`)


// reduce esta funcion nos ayuda a reucir los diferentes valores del array a un solo valor 

// esta es la versión estandar de las funciones 
// const reducer = (acum, persona) => {
//     return acum + persona.cantidadDelibros
// }

const reduce = (acum, {cantidadDelibros}) => acum + cantidadDelibros

var  totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tiene ${totalDeLibros} libros`)
