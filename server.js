// main server.js file
//initialze express setup
var express = require("express");
var app = express();
var PORT = process.env.NODE_ENV || 3000;
var expressHandlebars = require("express-handlebars");

//initialize Database setup
var Sequelize = require("sequelize");
var connection = new Sequelize("login_auth_db", "root");

//initialize other packages needed
var bcrypt = require("bcryptjs"); //needed to encrypt password
var bodyParser = require("body-parser");



