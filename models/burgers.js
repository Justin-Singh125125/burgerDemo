const orm = require("../config/orm");

const burgers = {
    findAll: function () {

    },
    createOne: function (createData, callbackFunction) {

        const tableName = "burgers";
        const burgerColumns = ["burger_name", "devoured"];
        const burgerValues = [createData.burger_name, createData.devoured]

        orm.createOne(tableName, burgerColumns, burgerValues, function (results) {
            callbackFunction(results);
        });
    },
    updateOne: function (updateData) {
        const condition = `id=${updateData.id}`;
    },
}

module.exports = burgers;