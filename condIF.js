// IF  ELSE



var mauro = {
    nombre: 'mauro',
    apellido: 'nieto',
    edad: 30,
    ingeniero: true,
    cocinero: false,
    abogado: true
}

var cris = {
    nombre: 'cris',
    edad: 16,
}

// bool
function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)

    if(persona.ingeniero){
         console.log(`Ingeniero`)
    }else{
        console.log('no es ingeniero')
    }
    if(persona.cocinero){
        console.log(`Cocinero`)
    }
    if(persona.abogado){
        console.log(`abogado`)
    }
}

imprimirProfesiones(mauro)

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimiSiEsMayorDeEdad(persona){
    console.log(`${persona.nombre} es:`)

    if(esMayorDeEdad(persona)) {
        console.log(`mayor de edad`)
    }else{
        console.log(`menor de edad`)
    }

}
imprimiSiEsMayorDeEdad(mauro)



// arrow functions

const ES_MAYOR_DE_EDAD = ({edad}) => edad >= MAYORIA_DE_EDAD


function permitirAcceso(persona){
    if(!esMayorDeEdad(persona)){
        console.log('ACCESO DENEGADO')
    }
}



// FOR
