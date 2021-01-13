// promt esta funcion le hace una pregunta al usuario y le pide datos

var signo = prompt('Cual es tu signo?')

switch (signo) {
    case 'Tauro':
    case 'tauro':
        console.log('Trabajo y negocios: llega hoy propuesta laboral que le llena de expectativas.  El cambio será oportuno. Amor: las esperanzas que se renuevan animan a la pareja para una nueva etapa.')
        break

    case 'Geminis':
    case 'geminis':
    case 'Géminis':
    case 'géminis':
        console.log('GÉMINIS (21 mayo a 21 junio) - Trabajo y negocios: un dato valioso será entregado por un desconocido; sus rivales le atacarán. Amor: de parte de su pareja, recibirá un tierno presente que impedirá los reproches.')
        break

    case 'Sagitario':
    case 'sagitario':
        console.log('SAGITARIO (23 noviembre a 21 diciembre)-Trabajo y negocios: todo gira alrededor suyo. Será inteligente repartir el esfuerzo. Amor: disfrutará de dulces vivencias junto a la persona menos imaginada; será su nueva pareja.')
        break

    case 'Piscis':
    case 'piscis':
        console.log('PISCIS (20 febrero a 20 marzo)-Trabajo y negocios: los problemas de comunicación se resolverán, con un pequeño esfuerzo. Nueva etapa. Amor: la pareja atraviesa un momento difícil. El diálogo alejará los temores.')
        break
// parte final de todo switch
    default:
        console.log('No es un signo valido')
        break
}