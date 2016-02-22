// main server.js file
//initialze express setup
var express = require("express");
var app = express();
var PORT = process.env.NODE_ENV || 3000;
var session = require("express-session");
var expressHandlebars = require("express-handlebars");

//initialize Database setup
var Sequelize = require("sequelize");
var connection = new Sequelize("login_auth_db", "root");

//initialize other packages needed
var bcrypt = require("bcryptjs"); //needed to encrypt password
var bodyParser = require("body-parser");

//Middleware code
app.use(require("express-session")({ //using express sessions in order to have the user logged in for a certain period of time
	secret: "blackmamba",
	resave: true, // unsure of what this line does
	saveUnitialized: true, //unsure of what this line does
	cookie : { secure : false, maxAge : (4 * 60 * 60 * 1000) }//4 hours
}));

// app.use(passport.initialize()); this is for using passport
// app.use(passport.session()); this is for using passport

// Handlebars setup, expressHandlebars initialized at the top of the page

app.engine("handlebars", expressHandlebars({
	defaultlayout: "main" //default layout is set to the "main" file, in the layouts folder
}));


