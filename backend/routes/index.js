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
  return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '15m' });
}


function generateRefreshToken(user) {
  return jwt.sign(user, process.env.TOKEN_SECRET);
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
      access: accessToken,
      refresh: refreshToken
    });
    console.log(accessToken,refreshToken)
  });
});

//refresh token
router.post('/api/token/refresh/', function(req, res, next) {
  console.log(req.body)
  const refreshToken = req.body.refresh;

  jwt.verify(refreshToken, process.env.TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired refresh token' });
    }

    const accessToken = generateAccessToken({ email: user.email });
    res.json({ accessToken: accessToken });
  });
});

//whoAmI
router.get('/api/whoami', function(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token is required' });
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }

    const userEmail = decoded.email;

    const sql = "SELECT * FROM user WHERE email = ?";
    const params = [userEmail];

    db.get(sql, params, (err, row) => {
      if (err) {
        return res.status(500).json({ error: 'Internal server error' });
      }

      if (!row) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json({ user: row });
    });
  });
});

//favorites POST
router.post('/api/fav/',function(req, res, next){
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token is required' });
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }

    const userId = decoded.email

    console.log(userId)

    console.log(req.body.exer_id)

    var data = {
      exer_id: req.body.exer_id,
      user_id: decoded.email
    };

    var sql ='INSERT INTO favorites (exer_id, user_id) VALUES (?,?)';
    var params =[data.exer_id,data.user_id];
    db.run(sql, params, function (err, result) {
      if (err){
        res.status(400).json({"error": err.message});
        return;
      }
      res.json({
        "message": result,
      });
    });
  })
})

//favorites GET 
router.get('/fav', function(req, res, next){
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token is required' });
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }

    const userID = decoded.email;

    const sql = "SELECT * FROM favorites WHERE user_id = ?";
    const params = [userID];

    db.all(sql, params, (err, rows) => {
      if (err) {
        return res.status(500).json({ error: 'Internal server error' });
      }

      if (rows.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }

      const userFavorites = rows.map(row => row.exer_id);
      res.json({ user: userFavorites });
    });
  });
});


router.get('/', function(req, res, next){
  res.send('home');
});

module.exports = router;
