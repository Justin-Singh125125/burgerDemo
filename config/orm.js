const connection = require("./connection");

function convertObjToSQL(obj) {
    let array = [];

    for (keys in obj) {
        array.push(`${keys}=${obj[keys]}`);
    }
    return array.toString();
}
function printQuestionMarks(num) {
    let array = [];

    for (let i = 0; i < num; i++) {
        array.push("?");
    }

    return array;
}


const orm = {
    findAll: function () {

    },
    createOne: function (tableName, columns, values, callbackFunction) {
        // const queryString = `INSERT INTO burgers ("burger_name", "devoured") VALUES (?,?,?)`
        const queryString = `INSERT INTO ${tableName} (${columns.toString()}) VALUES (${printQuestionMarks(values.length)})`

        connection.query(queryString, values, function (err, results) {
            callbackFunction(results);
        })
    },
    updateOne: function (tableName, values, condition, callbackFunction) {
        // const queryString = `UPDATE burgers SET devoured=true WHERE id=3`
        const queryString = `UPDATE ${tableName} SET `
        connection.query(queryString, function (err, result) {

        })
    },
}


module.exports = orm;

