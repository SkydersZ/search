# Documentation

## Table des matières

* [Collaborateurs](#Collaborateurs)
* [Consignes](#consignes)
  * [Outils Utilisés](#outils-utilisés)
* [Installation du Projet](#installation-du-projet)

### Collaborateurs

* Emilie GOUGEON
* Sofiane BOUCARD
* Mathieu KEROMNES

### Consignes

TP: Un moteur de recherche doit être réalisé.

#### Outils Utilisés

Application: [NodeJS](https://nodejs.org/en/)

Server: [Nginx](https://www.nginx.com/)

Base de données: [Elastic Search](https://www.elastic.co/fr/elasticsearch)

Cache: [Memcached](https://memcached.org/)

### Installation du Projet

Pour installer le projet, vous allez avoir besoin au préalable d'installer:

* NodeJS &rarr; 12.16.2

* NPM &rarr; 6.14.22

* Git &rarr;  2.16.2

Une fois ceci fait nous allons pouvoir récupérer la solution.

Pour cela nous allons cloner la solution Git:

_ouvrez un invite de commande/terminal et entrez la commande si dessous_

`git clone https://github.com/SkydersZ/search.git` (HTTPS)

OU

`git clone git@github.com:SkydersZ/search.git` (SSH)

_Attention, si vous utilisez le SSH, n'oubliez pas de configurer votre clé SSH pour github!_
_Si vous ne savez pas comment faire, voici [une documentation explicative sur github](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)._

Si tout se passe bien vous devriez voir le dossier `search/` apparaître dans le dossier dans lequel vous avez cloné le projet.

Maintenant toujours avec l'invite de commande faite un `cd search/`.

Une fois rentré dans le dossier, faite un `npm install` pour installer toutes les librairies `npm` nécessaire au bon fonctionnement de l'application.

Puis faite un 'npm start' pour lancer la solution node.

```bash
> search@1.0.0 start /home/sofiane/Documents/Développement/Web/NodeJS/search
> node ./bin/www
```

_Voici ce que devrait vous afficher l'invite de commande._

Normalement si cela fonctionne correctement, en vous connectant à l'adresse suivante [127.0.0.1](http://127.0.0.1:3000), vous devriez avoir un message affiché "Welcome to Express".

Et voilà! Le projet est installé sur votre machine et fonctionne!
