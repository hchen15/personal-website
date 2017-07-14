var express = require('express');
var bodyParser = require('body-parser');
var mustache = require('mustache-express');

var app = express();

/********************************************************************
* App Setup 
*********************************************************************/
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(express.static(__dirname + '/public/html'));

app.engine('html', mustache());
app.set('view engine', 'html');

app.set('views', __dirname + '/public/html');

var port = process.env.PORT || 3000;

/********************************************************************/

app.get("/", function(req, res) {
  res.render('index.html');
});

app.get("/experience", function(req, res) {
	res.render('experience.html')
});

app.get("/connect", function(req, res) {
	res.render('connect.html')
});

app.get("/projects", function(req, res) {
	res.render('projects.html')
});

app.listen(port, function() {
  console.log("Listening on port 3000");
});