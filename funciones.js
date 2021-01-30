var nombre 
var apellido 
var edad 

// function imprimirEdad(){
//     console.log(`${nombre} tiene ${edad} años`)
// } 

// imprimirEdad()

function imprimirEdad(n, a, e){
    console.log(`${n} ${a} tiene ${e} años`)
} 

imprimirEdad(apellido, nombre, edad)

imprimirEdad('Laura', 'Cardenas', 23)
imprimirEdad('diego', 'lopez', 25)
// javascript simpre va a tratar de leer los datos 
imprimirEdad(23, 'erick','diaz' )


// 
// 
// 
// Alcance

var nombre = 'Mauro'

function nombreEnMayusculas (n){
    console.log(n.toUpperCase())
}


nombreEnMayusculas(nombre)


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
