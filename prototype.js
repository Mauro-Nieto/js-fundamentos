
// existe la herenci aprototipal en lugar de las clases en javascript fn o noop

class Persona{
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
}

saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

alto(){
    return this.altura > 1.8
}
}

class desarrollador extends Persona{
    constructor(nombre, apellidos, altura){
        super(nombre, apellidos, altura)
}
saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)

}
}




var mauro = new Persona('mauro', 'nieto', 1.82)
var camila = new Persona('camila', 'cardenas', 1.90)
var cris = new Persona('cris', 'peña', 1.70)

// new seguida del prototipo hace que se genere un nuevo objeto.
// 

 
// agregar atributo altura
// se le tiene que pasar al constructor
// agregar la funcion al prototipo de persona que sea "soy alto "
// retornar si es alto o no segun su altura

// el prototipo es un objeto mas de javascript 

// es muy importante donde se colocan las funciones del protot
// this en las arrow function no es quien se espera

// ecmascript estandar donde estan las funcionalidades del lenguaje 
