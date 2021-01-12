var x = 4, y = '4'

var mauro ={
    nombre: 'mauro'
}

var otroMauro ={
    nombre: 'mauro'
}


// si se modifican valores al desglosar un objeto el cambio afectara en los dos pues usan el mismo espacio en memoria ram
var otraPersona = {
    ...mauro
}
