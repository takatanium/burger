let orm = require('../config/orm');

let burger = {
  selectAll: (cb) => {
    orm.selectAll("burgers", (res) => cb(res));
  },
  insertOne: (name, cb) => {
    orm.insertOne("burgers", name, (res) => cb(res));
  },
  updateOne: (id, cb) => {
    orm.updateOne("burgers", id, (res) => cb(res));
  }
};

module.exports = burger;
