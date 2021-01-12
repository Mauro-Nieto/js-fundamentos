var mauro = {
    nombre:'mauro',
    apellido: 'Nieto',
    edad: 30         
}

var cris = {
    nombre:'cris',
    apellido: 'Peña',
    edad: 31         
}
// function imprimirNombreEnMayusculas(n){
//     n = n.toUpperCase()
//     console.log(n)
// }
// imprimirNombreEnMayusculas(mauro.nombre)
// imprimirNombreEnMayusculas(cris.nombre)


// function imprimirNombreEnMayusculas(n){
//     console.log(n.nombre.toUpperCase())
// }
// imprimirNombreEnMayusculas(mauro)
// imprimirNombreEnMayusculas(cris)

// function imprimirNombreEnMayusculas({nombre}){
//     console.log(nombre.toUpperCase())
// }
// imprimirNombreEnMayusculas(mauro)
// imprimirNombreEnMayusculas(cris)
// imprimirNombreEnMayusculas ({nombre:'Pepito'})

// function imprimirNombreEnMayusculas(n){
//     // var nombre = n.nombre
//     var  {nombre} = n
//     console.log(nombre.toUpperCase())
// }

// imprimirNombreEnMayusculas(mauro)
// imprimirNombreEnMayusculas(cris)

function imprimirNombreApellidoyEdad (nombre, apellido, edad){
    console.log(`Hola me llamo ${nombre} ${apellido} y tengo ${edad} años `)
}
imprimirNombreApellidoyEdad(mauro.nombre, mauro.apellido, mauro.edad)


function cumpleanios(mauro) {
    return {
        ...mauro,
        edad: mauro.edad +1
    }
}