/**
 * All requireds
 */
const argv = require('yargs')
                .command('listar','Imprime en consola la tabla de multiplicar',{
                    base:{
                        demand: true,
                        alias: 'b'
                    },
                    limite: {
                        alias: 'l',
                        default: 10
                    }
                })
                .help()
                .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');


//let parametro = argv[2].split('=')[1];

console.log(argv.base);
console.log(argv.limite);
/*
crearArchivo( parametro )
    .then( archivo => console.log( `Archivo creado: ${ archivo }` ) )
    .catch( e => {
        console.log( e );
    });*/