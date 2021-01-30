var mauro = {
    nombre: 'Mauro',
    apellido: 'Nieto',
    edad: 18,
    ingeniero: false, 
    cocinero: true,
    cantante: false,
    dj: false,
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre}`)

    if (persona.ingeniero){
        console.log('Ingeniero')
    } else {
        console.log('No es Ingeniero')
    }
    if (persona.cocinero){
        console.log('Cocinero')
    }
    if (persona.cantante){
        console.log('cantante')
    }
    if(persona.dj){
        console.log('dj')
    }

}
imprimirProfesiones(mauro)




  
// const MAYORIA_DE_EDAD = 18 

// function esMayorDeEdad (persona){
//     return persona.edad >= MAYORIA_DE_EDAD
// }
 
// function imprimirSiEsMayorDeEdad(persona){
//     if( esMayorDeEdad(persona)){
//         console.log(`${persona.nombre} es mayor de edad`)
//     } else {
//         console.log(`${persona.nombre} es menor de edad`)
//     }

// }
// imprimirSiEsMayorDeEdad(mauro)
    

