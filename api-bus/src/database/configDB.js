const mysql = require('mysql');


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'BusEscolar'
});


connection.connect((err) => {
    if (err) throw console.log(err);
    console.log("Connected!");
});


module.exports = connection;