var mauro = {
    nombre: 'Mauro',
    apellido: 'Nieto',
    edad: 30,
    peso: 65
}
console.log(`Al inicio de año ${mauro.nombre} pesa ${mauro.peso} kg`)


const INCREMENTO_PESO = 0.2
const DIAS_DEL_AÑO = 365

function aumentarDePEso = persona => persona.peso += INCREMENTO_PESO
function adelgazar = persona => persona.peso -= INCREMENTO_PESO

// const aumentarDePEso = persona => persona.peso += 200


// usar contador
for (var i = 1; i <= DIAS_DEL_AÑO; i++){
    var random = Math.random()
//aumenta de peso
    if(random <0.25){
        aumentarDePEso(mauro)
// adelgaza
    } else if(random < 0.5) {
        adelgazar(mauro)
    }
}


console.log(`Al final del año ${mauro.nombre} pesa ${mauro.peso.toFixed(2)} kg`)
