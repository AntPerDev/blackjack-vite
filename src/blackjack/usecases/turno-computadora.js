import {pedirCarta, valorCarta, crearCartaHTML } from './';

/**
 * Turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar los puntos
 * @param {Array<String>} deck
 */
export const turnoComputadora = ( puntosMinimos,puntosHTML, divCartasComputadora, deck=[] ) => {
 
    if (!puntosMinimos ) throw new Error('Puntos minimos son necesarios')
    if (!puntosHTML ) throw new Error('PuntosHTML argumento es necesario')

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCartaHTML( carta )  ;  
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {

        if( puntosComputadora === puntosMinimos ) {
            console.warn('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            console.warn('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            console.warn('Jugador Gana');
        } else {
            console.warn('Computadora Gana')
        }
        
    }, 100 );
}