var express = require('express');
var router = express.Router();

const lists = require('../public/data/data');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getBooks', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    dataList = lists.getHTML();
    res.send(dataList);
});

router.get('/getJSON', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  dataList = lists.getJSON();
  res.send(dataList);
})

module.exports = router;
