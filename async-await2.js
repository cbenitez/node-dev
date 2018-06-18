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
/*
let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe el empleado con el ID ${id}`);
        } else {
            let empleado_salario = getSalario(empleadoDB);
            resolve(empleado_salario);

        }

    });

}
*/
let getEmpleado = async ( id ) => {
    let empleadoDB = empleados.find( empleado => empleado.id === id );
    if( !empleadoDB ){
        throw new Error( `No existe el empleado con el ID ${ id }` );
    }else{
        return empleadoDB;
    }
}

/*
let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);
        if (!salarioDB) {
            reject(`No se encontro un salario para el usuario ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }

    });

}
*/

let getSalario = async ( empleado ) => {
    let salarioDB = salarios.find( salario => salario.id === empleado.id );
    if( !salarioDB ){
        throw new Error( `No se encontro un salario para el usuario ${empleado.nombre}` );
    }else{
        return { nombre: empleado.nombre, salario: salarioDB.salario, id: empleado.id };
    }
}

let getInformacion = async ( id ) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario( empleado );
    return `${ resp.nombre } tiene un salario de G.${ resp.salario}`;
}

getInformacion( 1 ).then( mensaje => {
    console.log( mensaje );
}).catch( e => {
    console.log( e );
});