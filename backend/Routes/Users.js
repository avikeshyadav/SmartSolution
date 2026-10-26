const express = require("express");
const LoginController = require("../Controllers/Login.Controller");
const Router = express();

Router.post("/login", LoginController.Login);
Router.get("/login", LoginController.getLogin);

module.exports = Router;