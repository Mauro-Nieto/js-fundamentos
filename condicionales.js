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
    

// ARROW FUNCTIONS 



const MAYORIA_DE_EDAD2 = 18 

const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD2

 
function imprimirSiEsMayorDeEdad(persona){
    if( esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

function permitirAcceso (persona){
    if(esMayorDeEdad(persona)){
        console.log('Permitir acceso')        
    } else {
        console.log('acceso denegado')
    }
}

// function esMenorDeEdad
// retorne la negacion de la llamada a es mayor de edad