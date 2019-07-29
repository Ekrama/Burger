let connection = require("./connection");

function selectAll(cb){
    connection.query("SELECT * FROM burgers;", function(err, data){
        cb(err, data);
    })
}

function insertOne(burger, cb) {
    connection.query(
        "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)", 
        [burger.name, burger.devoured],
        function(err, data){
            cb(err, data);
        }
    );
}

function updateOne(burger, cb){
    connection.query(
        "UPDATE burgers SET devoured = ? WHERE id = ?", 
        [burger.devoured, burger.id], 
        function(err, data){
            cb(err, data);
        }
    );
}

module.exports = {
    update: updateOne, 
    selectAll: selectAll,
    insert: insertOne
};