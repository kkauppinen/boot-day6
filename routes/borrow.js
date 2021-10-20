const express = require("express");
const router = express.Router();
const borrow = require("../models/borrow_model");

router.get("/:id?", function (request, response) {
  if (request.params.id) {
    borrow.getById(request.params.id, function (err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  } else {
    borrow.getAll(function (err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  }
});

router.post("/", function (request, response) {
  borrow.add(request.body, function (err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(request.body);
    }
  });
});

router.delete("/:id", function (request, response) {
  borrow.delete(request.params.id, function (err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

router.put("/:id", function (request, response) {
  borrow.update(request.params.id, request.body, function (err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

module.exports = router;