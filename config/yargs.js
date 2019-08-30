const options = {
    base: {
        demand: true, //Comando obligatorio
        alias: 'b'
    },
    limite: {
        alias: 'l',
        defaut: 10
    }
}

const argv = require('yargs') //Se usa para configurar los comandos de la consola
    .command('listar', 'Imprime en consola la tabla de multiplicar', options) //Creamos un comando 
    .command('crear', 'Genera un archivo con la tabla de multiplicar', options)
    .help() //Muestra información sobre los comandos
    .argv;

module.exports = {
    argv
}