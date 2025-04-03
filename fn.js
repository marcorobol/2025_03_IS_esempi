/**
 * Funzione che somma due numeri
 * @param {Number} a numero da moltiplicare
 * @param {Number} b 
 * @returns {Number}
 */
function add( a, b ) { // Function Declaration
    return a + b;
};

var mult = function( a, b ) { // Function Expression
    return a * b;
};

const mod = ( a, b ) => { // Arrow Function (+args +instructions)
    let r = a % b;
    return r;
}

var pow2 = a => a * a // Arrow Function (1arg 1instruction, no return needed)

console.log( add('s2',2) );
console.log( mult(2,3) );
console.log( mod(3,2) );
console.log( pow2(3) );