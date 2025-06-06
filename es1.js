/**
 * Task description: Write a method that clears array from all
 * unnecessary elements, like false, undefined, empty strings, zero, null
 * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
 * Task Complexity: 1 of 5
 * @param {Array} array - An array of any elements
 * @returns {Array}
 */
export const compact = (array) => {
    return array.filter( v => v );
    var copia = [];
    array.forEach( (v) => {
        if ( v )
            copia.push(v);
    } );
    return copia;
};
const data = [0, 1, false, 2, undefined, '', 3, null, 'marco'];
console.log( compact(data) )