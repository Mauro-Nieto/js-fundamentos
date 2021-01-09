// declarar variavle
var nombre = 'Mauro'
var apellido = 'Nieto'

var nombreMayusculas = nombre.toUpperCase()

var apellidoMinusculas = apellido.toLowerCase()
var primeraLetraDelNombre = nombre.charAt(0)

var cantidadDeLetrasDelNombre = nombre.length


// var nombreCompleto = nombre + ' '+ apellido

// la comilla invertida interpola variables
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

// toma las letras que se indiquen 
var str = nombre.substr(1, 2)

var ultimaLetra = nombre.charAt(nombre.length-1)