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
process.env.CADUCIDAD_TOKEN = '48h';

//====================
// SEED de autenticacion
//====================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://anibaldel:31EnKL3kc8POqOzF@cluster0-mmm8z.mongodb.net/cafe';
}

process.env.URLDB = urlDB;

//====================
// GGOGLE client ID
//====================
process.env.CLIENT_ID = process.env.CLIENT_ID || '78090145527-4tfi4ns3oh8ammk9hvjomh08aroacpkr.apps.googleusercontent.com';