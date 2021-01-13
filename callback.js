const API_URL = 'https://www.swapi.tech/api/'
const PEOPLE_URL = 'people/:id'

// para poder hacer un recuest con jquery
// callback es una funcion que se va a ejecutar en algun futuro el cuel $get es el encargado de llamarlo cuando el recuest termine de ejecutarce y envie los datos
const lukeUrl = `${API_URL} ${PEOPLE_URL.replace(':id', 1)}`
const opts = {crossDomain: true}

$.get(lukeUrl, opts, function (){
    console.log(arguments)
})