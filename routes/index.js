const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'PugSearch', numarray: [1, 2, 3, 4, 5]});
});

module.exports = router;
