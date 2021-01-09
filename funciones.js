var nombre = "Mauro"
var edad = 28

function imprimirEdad(){
    console.log(`${nombre} tiene ${edad} años`)
} 

imprimirEdad()

function imprimirEdad(n, e){
    console.log(`${n} tiene ${e} años`)
} 

imprimirEdad(nombre, edad)

imprimirEdad('Laura', 23)
imprimirEdad('diego', 25)
// javascript simpre va a tratar de leer los datos 
imprimirEdad(23, 'erick')


