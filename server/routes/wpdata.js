var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
// var d = require('./data.json')

/* GET users listing. */
router.get('/', function(req, res, next) {
  const url = 'http://misjeofmconv.16mb.com/wp-json/wp/v2/posts'
  fetch(url, {
    type: 'GET',
  })
    .then(resp => {
      return resp.json();
    })
    .then(r => {

      console.log('response', r)
      res.send(JSON.stringify(r));
    });
  // connection.query('SELECT * from members', function (error, results, fields) {
  //   if (error) throw error;
  //   res.send(JSON.stringify(results));
  // });

  // res.send(JSON.stringify('respond with a resourceqq'));
});

module.exports = router;
