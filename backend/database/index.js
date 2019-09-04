const postgres = require('pg');
const seq = require('sequelize');


const database = new seq('splitified', 'masteradmin', 'Canyon286038', {
    'host': 'localhost',
    'dialect': 'postgres',
})


database.authenticate()
    .then(() => {
        console.log("postgres database connected")
    })
    .catch((err) => {
        console.log("error with server: " + JSON.stringify(err))
    })


module.exports.database = database;