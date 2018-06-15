/**
 * 
 * Async Await
 * 
 */

 let getNombre = async() => {

    //throw new Error( 'No existe un nombre para ese usuario' );

     return 'Christian';
 };

 /*
  El codigo de arriba es igual a este
  
let getNombre = () =>{
    return new Promise( ( resolve, reject ) =>{ 
        resolve( 'Christian' );
    });
}
*/

getNombre().then( nombre => {
    console.log( nombre );
})
.catch( e => {
    console.log( `Error `, e );
});
