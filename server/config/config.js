//====================
// Puerto
//====================
process.env.PORT = process.env.PORT || 3000;

//====================
// Entorno
//====================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//====================
// Base de datos
//====================

//====================
// Vencimiento del Token
//====================
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//====================
// SEED de autenticacion
//====================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://anibaldel:v2sUuZxwPvmA9RZA@cluster0-jli1c.mongodb.net/cafe';
}

process.env.URLDB = urlDB;