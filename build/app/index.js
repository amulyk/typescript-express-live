"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Core
var express = require("express");
var bodyParser = require("body-parser");
// Connection
var connect_1 = require("./connect");
// Routes
var routes_1 = require("./routes");
var app = express();
var port = 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    return res.send('Welcome!');
});
app.listen(port, function () {
    return console.log("Application was started on port " + port + ".");
});
var db = 'mongodb://lab.lectrum.io:37019/express';
connect_1.connect({ db: db });
routes_1.routes({ app: app });
