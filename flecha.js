/*
let sumar = (a , b ) => a + b;

console.log(sumar(10,20));

let saludar1 = () => {
    return 'Hola mundo';
}

let saludar = () => 'Hola mundo!';

console.log(saludar());

*/

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre(){
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}

console.log(deadpool.getNombre());