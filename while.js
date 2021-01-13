var mauro = {
    nombre: 'Mauro',
    apellido: 'Nieto',
    edad: 30,
    peso: 65
}
console.log(`Al inicio de año ${mauro.nombre} pesa ${mauro.peso} kg`)


const INCREMENTO_PESO = 0.3
const DIAS_DEL_AÑO = 365

// function aumentarDePEso (persona) {
//     return persona.peso += INCREMENTO_PESO
// }
const aumentarDePEso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random ()< 0.3
const realizaDeporte = () => Math.random () < 0.4

const META = mauro.peso - 3
var DIAS = 0


while (mauro.peso > META){
    
    if (comeMucho()){
        aumentarDePEso(mauro)
    }
    if (realizaDeporte()){
        adelgazar(mauro)
    }
    DIAS += 1
}




console.log(`Pasaron ${DIAS} dias para que ${mauro.nombre} adelgazara 3kg`)
