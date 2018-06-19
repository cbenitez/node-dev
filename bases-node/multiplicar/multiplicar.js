/**
 * All requireds
 */
const fs = require('fs');

const colors = require('colors');

let listarTabla = ( base, limit = 10 ) => {
	
	if (!Number(base)) {
		throw new Error(`El valor introducido "${base}" no es un numero`);
	}

	let resultado = '';

	for (var i = 1; i <= limit; i++) {
		resultado += `${base} * ${i}: ${i * 2} \n`;
	}

	console.log( resultado.rainbow );

}

let crearArchivo = ( base, limit = 10 ) => {
	return new Promise( ( resolve, reject ) => {
		
		if( !Number( base ) ){
			reject( `El valor introducido "${ base }" no es un numero`.yellow );
			return;
		}
		
		let resultado = '';

		for (var i = 1; i <= limit; i++) {
			resultado += `${ base } * ${i}: ${i * 2} \n`;
		}
		
		fs.writeFile(`tablas/tabla-${ base }-al-${ limit }.txt`, resultado, err => {
			if (err) 
				reject( err )
			else
				resolve(`tabla-${ base }-al-${ limit }.txt` );
		
		});

	});
}

module.exports = {
	crearArchivo,
	listarTabla
}