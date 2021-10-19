var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

/* Own GET request */
router.get("/eka", function (request, response) {
  console.log("Ekaa kutsuttiin");
  response.send("Eka vastaa, kun sille huutaa");
});

router.get("/toka/:fname", function (request, response) {
  console.log("Etunimi: " + request.params.fname);
  response.send(request.params.fname + " vastaa, kunhan ei huuda.");
});

router.use(function (request, response, next) {
  console.log("olen middleware functio");
  next();
});

router.post("/", function (request, response) {
  console.log(request.body);
  response.send(request.body);
});

router.post("/kolmas", function (request, response) {
  console.log(request.body.firstname);
  response.send(request.body.firstname);
});

router.put("/:id", function (request, response) {
  let id = request.params.id;
  let tiedot = JSON.stringify(request.body);
  console.log("Kirjan " + id + " uudet tiedot: " + request.body.name);
  response.send("Kirjan " + id + " uudet tiedot: " + tiedot);
});

module.exports = router;
