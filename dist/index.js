"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
var port = 3000;
app.get("/", function (req, res) {
  res.send("Hello, World!");
});
app.listen(port, function () {
  console.log("Server running on port ".concat(port)); // log the port where the server is running
});