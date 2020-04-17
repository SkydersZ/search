const express = require('express');
const router = express.Router();
const client = require('../instances/elasticsearch');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express'});
});

/* GET elastic search results */
router.get('/search/:searchValue', function(req, res) {
  const searchValue = req.params.searchValue;
  let resultsArray = [];

  // Cette vérification est pour l'instant inutile
  if (searchValue === '') {
    res.status(404).send('Not found');
    return;
  }

  const bodyContent = {
    query: {
      match: {
        content: searchValue,
      },
    },
  };

  client.search({index: 'search', body: bodyContent})
      .then((results) => {
        console.log(`found ${results.hits.total} items in ${results.took}ms`);
        // Mettre les éléments du résults trouvés dans le cache.
        resultsArray = results.hits;
        res.send(results.hits.hits);
      }).catch((err)=>{
        console.log(err);
        res.send([]);
      });
});

module.exports = router;
