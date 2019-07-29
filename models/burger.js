let orm = require("../config/orm");

function getAll(cb) {
    orm.selectAll(cb);
}
function createBurger(name, cb) {
    orm.insert({ name, devoured: false }, cb);
}

function eatBurger(id, cb) {
    orm.update({ id, devoured: true }, cb);
}

module.exports = {
    getAll: getAll,
    createBurger: createBurger,
    eatBurger: eatBurger
};