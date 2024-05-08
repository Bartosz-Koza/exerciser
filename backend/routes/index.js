require('dotenv').config();
var express = require('express');
var router = express.Router();
var db = require("../database.js");
var md5 = require("md5");
var jwt = require("jsonwebtoken");


var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
}


function generateRefreshToken(user) {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
}


router.get('/users', function(req, res, next) {
  var sql = "SELECT * FROM user";
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({"error": err.message});
      return;
    }
    res.json({
      "message": "success",
      "data": rows
    });
  });
});

// Register
router.post('/api/register/', function(req, res, next){
  var errors = [];
  if (!req.body.password){
    errors.push("No password specified");
  }
  if (!req.body.email){
    errors.push("No email specified");
  }
  if (errors.length){
    res.status(400).json({"error": errors.join(",")});
    return;
  }
  var data = {
    name: req.body.name,
    email: req.body.email,
    password: md5(req.body.password)
  };
  var sql ='INSERT INTO user (name, email, password) VALUES (?,?,?)';
  var params =[data.name, data.email, data.password];
  db.run(sql, params, function (err, result) {
    if (err){
      res.status(400).json({"error": err.message});
      return;
    }
    res.json({
      "message": "success",
      "data": data,
      "id": this.lastID
    });
  });
});

// Login
router.post('/api/login/', function(req, res, next) {
  var email = req.body.email;
  var password = md5(req.body.password);
  var sql = 'SELECT * FROM user WHERE email = ? AND password = ?';
  var params = [email, password];
  db.get(sql, params, function(err, row) {
    if (err) {
      res.status(400).json({"error": err.message});
      return;
    }
    if (!row) {
      res.status(401).json({"error": "Invalid email or password"});
      return;
    }

    const accessToken = generateAccessToken({ email: row.email });
    const refreshToken = generateRefreshToken({ email: row.email });
    res.json({
      accessToken: accessToken,
      refreshToken: refreshToken
    });
  });
});

router.get('/', function(req, res, next){
  res.send('home');
});

module.exports = router;
