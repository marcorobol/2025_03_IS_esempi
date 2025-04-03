// var fs = require( "fs" );
// var data = fs.readFileSync( "jsconfig.json", "utf8" );
// console.log( data );
// console.log( "Program ended" );

var fs = require( "fs" );
fs.readFile( "file.txt", "utf8", function(error, data) {
    console.log(data);
} );
setTimeout( () => console.log("after 0 ms") );
setTimeout( () => console.log("after 2000 ms"), 2000 );
console.log("Program ended.");