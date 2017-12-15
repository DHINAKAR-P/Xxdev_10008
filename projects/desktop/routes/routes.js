var express = require("express");
var api = express.Router();
var routers = require("./routers")
api.use("/Emaildata_Default_Activity", routers.Emaildata_Default_ActivityRouter);

module.exports = api;