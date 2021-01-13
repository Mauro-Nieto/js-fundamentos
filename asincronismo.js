//  funciones como parametros

class Persona{
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
}

saludar(fn){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    if(fn){
        fn(this.nombre, this.apellido)
    }
}

alto(){
    return this.altura > 1.8
}
}

class desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
}
    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
        if(fn){
            fn(this.nombre, this.apellido, true)
        }
    }
}
function responderSaludo(nombre, apellido, esDev){
    console.log(`buen dia ${nombre} ${apellido}`)
    if (esDev){
        console.log(`Ah mirá, no sabia que eras desarrollador/a`)
    }
}

var mauro = new Persona('mauro', 'nieto', 1.82)
var camila = new Persona('camila', 'cardenas', 1.90)
var cris = new desarrollador('cris', 'peña', 1.70)

mauro.saludar()
camila.saludar(responderSaludo)
cris.saludar(responderSaludo)