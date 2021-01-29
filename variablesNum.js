var edad  = 27

// edad = edad + 1
edad += 1

var peso = 75
// peso = peso - 2
peso -= 2

var pan = 1
peso = peso + pan

var jugarAlFutbol = 3

peso -= jugarAlFutbol

var precioDeVino = 200.3

var total = precioDeVino * 100 * 3 /100

// cuando no sabemos la cantidad de decimales usamos Math.round
var total = Math.round(precioDeVino * 100 * 3)/100

var totalStr = total.toFixed(2)

// con parceFloat transformamos de un tipo a otro flot son los decimales parce transformar
var total2 = parseFloat(totalStr)

var pizza = 8 
var personas = 2 
var cantidadDePorcionesPorPersona = pizza / personas