/**
 * All requireds
 */
const fs = require('fs');


let crearArchivo = ( base ) => {
    return new Promise( ( resolve, reject ) => {
        
        if( !Number( base ) ){
            reject( `El valor introducido "${ base }" no es un numero` );
            return;
        }

        let limit = 10;
        
        let resultado = '';

        for (var i = 1; i <= limit; i++) {
            resultado += `${ base } * ${i}: ${i * 2} \n`;
        }
        
        fs.writeFile(`tablas/tabla-${ base }.txt`, resultado, err => {
            if (err) 
                reject( err )
            else
                resolve( `tabla-${ base }.txt` );
        
        });

    });
}

module.exports = {
    crearArchivo
}