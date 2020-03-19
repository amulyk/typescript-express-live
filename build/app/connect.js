"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
exports.connect = function (_a) {
    var db = _a.db;
    var connect = function () {
        mongoose
            .connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
            .then(function () {
            return console.info("Successfully connected to " + db);
        })
            .catch(function (error) {
            console.error("Error conecting to db: " + error.message);
            return process.exit(1);
        });
    };
    connect();
    mongoose.connection.on('disconnected', connect);
};
