const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'burgers_db',
    user: 'root',
    password: 'password',
});

connection.connect(function (err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;