//Requireds
const fs = require('fs'); //Escribir datos en archivos
var colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('============='.green);
    console.log(`Tabla del ${base}`.green);
    console.log('============='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base *i}`);
    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número.`);
            return;
        }

        let data = new Uint8Array(Buffer.from('')); //Donde guardaremos los datos

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base *i}\n`); //Variable que guarda los datos
        }

        //Script para escribir los datos
        fs.writeFile(`./tablas/tabla-${base}-al ${limite}.txt`, data, (err) => { //Ruta y nombre de archivo, datos, error.
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al ${limite}.txt`);

        });

    });
}

//Permite poder exportar funciones a otros documentos
module.exports = {
    crearArchivo,
    listarTabla
}