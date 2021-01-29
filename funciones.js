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