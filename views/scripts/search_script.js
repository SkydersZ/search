const MEMCACHED_CONFIG = require('../../config/MEMCACHED_CONFIG');

const Memcached = require('memcached');
const memcached = new Memcached(MEMCACHED_CONFIG.SERVER, {
  maxValue: MEMCACHED_CONFIG.maxValue,
  maxKeySize: MEMCACHED_CONFIG.maxKeySize,
  poolSize: MEMCACHED_CONFIG.pool_size,
  timeout: MEMCACHED_CONFIG.timeout,
});

/**
 * Cherche les fichiers correspondants
 * @param {array} list La liste des fichiers en cache.
 * @return {array} searchArray La liste récupéré depuis le cache
 * ou elastic search.
 */
function searchfile(list) {
  let input = document.getElementById('searchbar').value;
  const searchArray = [];

  input = input.toLowerCase();

  console.log('searchfile has been passed');

  // Si un des fichiers contients une partie
  // de la valeur de l'input, on l'ajoute dans le tableau
  for (let i = 0; i<list.length; i++) {
    if (list[i].toLowerCase().includes(input)) {
      searchArray.push(list[i]);
    }
  }

  if (Array.isArray(searchArray) && searchArray.length) {
    // Faire une requête vers la base de données elastic search.

    // Mette le résultat de la requete dans le cache
    memcached.set('file_name', 'file_property_json', MEMCACHED_CONFIG.KEY_LIFETIME, function(err) {
      throw new Error(err);
    });
  }

  // TODO: Attribuer la valeur du nouveau tableau à l'ancien

  return searchArray;
}
