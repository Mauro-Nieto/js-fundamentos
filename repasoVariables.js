var nombre = 'Camila'
var apellido = 'cárdenas'
var edad = '23'

var persona = `HOLA ${nombre.toUpperCase()} ${apellido.toLowerCase()} `

var primeraLetraNombre = nombre.charAt(0)
var totalLetraNombre = nombre.length

var substr = nombre.substr(3, 6 )

var peso = 75
var hamburguesa = 2
var ejercicio = 1

peso += hamburguesa 
peso -= ejercicio

var precioCafe = 200.3

var total = Math.round (precioCafe * 100 * 3) / 100

var totalStr = total.toFixed(4)

var totalStrANumber = parseFloat(totalStr)
