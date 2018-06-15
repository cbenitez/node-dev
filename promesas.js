let empleados = [
    {
        id: 1,
        nombre: 'Fernado'
    },
    {
        id: 2,
        nombre: 'Melissa'
    },
    {
        id: 3,
        nombre: 'Juan'
    }
];

let salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

let getEmpleado = (id) => {

    return new Promise( ( resolve, reject ) =>{
        let empleadoDB = empleados.find(empleado => empleado.id === id);
    
        if (!empleadoDB) {
            reject(`No existe el empleado con el ID ${id}`);
        } else {
            resolve(empleadoDB);
        }

    });

}

getEmpleado( 1 ).then( empleado => {
    console.log( `Empleado de DB ${ empleado }`);
});