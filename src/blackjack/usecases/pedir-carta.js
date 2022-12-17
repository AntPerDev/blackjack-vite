/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck / baraja es un array de string que representan las cartas de la baraja
 * @return { String } 
 */
export const pedirCarta = ( deck ) => {

    if( !deck || deck.length === 0 ){
        throw new Error('No hay cartas en el deck')
    }

    const carta = deck.pop();
    return carta;
}

// export default {
//     pedirCarta
// }