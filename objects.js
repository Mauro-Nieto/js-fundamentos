var computadorMao = {
    teclado: 'tefclado inalambrico',
    mouse: 'mouse inalambrico',
    monitor: 'monitor de 40 pulgadas',
    memoriaRam: 1000,
    marca: 'DELL'
}

var computadorCami = {
    teclado: 'teclado analogo',
    mouse: 'mouse analogo',
    monitor: '17 pulgadas',
    memoriaRam: 800,
    marca: 'asus'
}


function imprimirMouse({ mouse }){
    console.log(mouse.toUpperCase())
}

imprimirMouse(computadorMao)
imprimirMouse(computadorCami)



// 
// 
// DESESTRUCTURAR OBJETOS

function imprimirMouse(computadores){
    var {mouse} = computadores
    console.log(mouse.toUpperCase())
}

imprimirMouse(computadorMao)
imprimirMouse(computadorCami)
    



// Mi computador es marca x y tiene y de memoria
function imprimirMarcaYMemoria({marca, memoriaRam}){
    console.log (`Mi computador es ${marca} y tiene ${memoriaRam} de memoria`)
}
imprimirMarcaYMemoria(computadorMao)
imprimirMarcaYMemoria(computadorCami)



// 
// 
// DESGLOCE

function masMemoria(computadores){
    return {
        ...computadores,
        memoriaRam: computadores.memoriaRam + 100
    }
}
var memoriaMejorada = masMemoria(computadorCami)
