/**
 * All requireds
 */
const fs = require('fs');

let base = 3;
let limit = 10;
let resultado = '';
for( var i = 1; i <= limit; i++ ){
    resultado += `${base} * ${i}: ${i * 2 } \n`;
}

fs.writeFile(`tabla-${base}.txt`, resultado, err => {
    if( err ) throw err;

    console.log('El archivo ha sido creado');


});