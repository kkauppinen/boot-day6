const db = require("../database");

const borrow = {
  getById: function (id, callback) {
    return db.query("select * from borrow where id_borrow=?", [id], callback);
  },
  getAll: function (callback) {
    return db.query("select * from borrow", callback);
  },
  add: function (borrow, callback) {
    return db.query(
      "insert into borrow (borrow_date,return_date,id_borrow,id_customer) values(?,?,?,?)",
      [borrow.borrow_date, borrow.return_date, borrow.id_borrow, borrow.id_customer],
      callback
    );
  },
  delete: function (id, callback) {
    return db.query("delete from borrow where id_borrow=?", [id], callback);
  },
  update: function (id, borrow, callback) {
    return db.query(
      "update borrow set borrow_date=?,return_date=?, id_borrow=?, id_customer=? where id_borrow=?",
      [
        borrow.borrow_date,
        borrow.return_date,
        borrow.id_borrow,
        borrow.id_customer,
        id,
      ],
      callback
    );
  },
};
module.exports = borrow;
