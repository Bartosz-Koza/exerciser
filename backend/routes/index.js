var express = require('express');
var router = express.Router();
var db = require("../database.js")

/* GET users listing. */
router.get('/user', function(req, res, next) {
  var sql = "select * from user"
  var params = []
  db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data":rows
      })
    });
});

router.get('/', function(req,res,next){
  res.send('home')
})

module.exports = router;
