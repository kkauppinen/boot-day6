const db = require("../database");

const book = {
  getById: function (id, callback) {
    return db.query("select * from book where id_book=?", [id], callback);
  },
  getAll: function (callback) {
    return db.query("select * from book", callback);
  },
  add: function (book, callback) {
    return db.query(
      "insert into book (borrow_date,return_date,id_book,id_customer) values(?,?,?,?)",
      [book.borrow_date, book.return_date, book.id_book, book.id_customer],
      callback
    );
  },
  delete: function (id, callback) {
    return db.query("delete from book where id_book=?", [id], callback);
  },
  update: function (id, book, callback) {
    return db.query(
      "update book set borrow_date=?,return_date=?, id_book=?, id_customer=? where id_book=?",
      [book.borrow_date, book.return_date, book.id_book, borrow.id_customer, id],
      callback
    );
  },
};
module.exports = book;
