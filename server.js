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
var mysql = require("mysql");


//initialize other packages needed
// var bcrypt = require("bcryptjs"); //needed to encrypt password
var bodyParser = require("body-parser");

//Middleware code
// app.use(require("express-session")({ //using express sessions in order to have the user logged in for a certain period of time
// 	secret: "blackmamba",
// 	resave: true, // unsure of what this line does
// 	saveUnitialized: true, //unsure of what this line does
// 	cookie : { secure : false, maxAge : (4 * 60 * 60 * 1000) }//4 hours
// }));

// app.use(passport.initialize()); this is for using passport
// app.use(passport.session()); this is for using passport

// Handlebars setup, expressHandlebars initialized at the top of the page

app.engine("handlebars", expressHandlebars({
	defaultlayout: "main" //default layout is set to the "main" file, in the layouts folder
}));

app.set("view engine", "handlebars"); //not sure what this does

app.use(bodyParser.urlencoded({ //uses the body parser to get info from the body
	extended: false
}));

// Setup the routes for each of the pages that need to be rendered

app.get("/", function (req, res) { //route for the / (home) page
	res.render("index"); // the file in the ("") must be in the views folder
});

app.get("/registration", function(req, res) { // route for the registration page in the views folder
	res.render("registration", { msg: "You've reached the registration page"}); //this will render the registration.handlebars in the views folder
});

app.get("/login", function(req, res) { //route for the login page in the views folder
	res.render("login", { msg: "You've reached the login page"});
});

app.get("/students", function(req, res) { //route for the students page in the views folder
	res.render("students", { msg: "You've reached the students page"});
});	

connection.sync().then(function() {
	app.listen(PORT, function () {
		console.log("Listening on port: " + PORT);
	})
});
