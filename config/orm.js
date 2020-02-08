const connection = require("./connection");

// function objToSql(ob) {
//     // column1=value, column2=value2,...
//     var arr = [];

//     for (var key in ob) {
//         arr.push(key + "=" + ob[key]);
//     }

//     return arr.toString();
// }

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

        const queryString = `INSERT INTO ${tableName} (${columns.toString()}) VALUES (${printQuestionMarks(values.length)})`

        connection.query(queryString, values, function (err, results) {
            callbackFunction(results);
        })
    },
    updateOne: function () {
        // const queryString = `UPDATE burgers SET devoured=true WHERE id=3`

        connection.query(queryString, function (err, result) {

        })
    },
}

module.exports = orm;

