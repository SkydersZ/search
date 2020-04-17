const express = require('express');
const router = express.Router();
const client = require('../instances/elasticsearch');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express'});
});

/* GET elastic search results */
router.get('/search', function(req, res) {
  const bodyContent = {
    query: {
      match: {
        content: 'Avril',
      },
    },
  };

  client.search({index: 'search', body: bodyContent})
      .then((results) => {
        console.log(`found ${results.hits.total} items in ${results.took}ms`);
        res.send(results.hits.hits);
      }).catch((err)=>{
        console.log(err);
        res.send([]);
      });
});

module.exports = router;
