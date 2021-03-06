# Documentation

## Table des matières

* [Collaborateurs](#Collaborateurs)
* [Consignes](#consignes)
  * [Outils Utilisés](#outils-utilisés)
* [Installation du Projet](#installation-du-projet)
* [Installation de Memcached](#installation-de-memcached)
  * [Clear Linux](#clear-linux)
  * [Windows](#windows)
  * [NPM MemCached](#npm-memcached)
* [Commandes git](#commandes-git)

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

### Installation de Memcached

Pour installer **Memcached**, vous aurez besoin de `NPM` et de NodeJS mais aussi de:
**Memcached 1.6.5** (Pour Clear linux)
**Memcached 1.4.4** (Pour windows)

#### Clear Linux

Pour installer Memcached sous `Clear linux` il vous faut exécuter les commandes suivantes:

`sudo swupd bundle-add memcached`

on vérifie que Memcached c'est bien installé en faisant `memcached -V` 

puis on lance le service: `sudo systemctl start memcached`.

Pour stoper le service: `sudo systemctl stop memcached`.

#### Windows

Pour installer Memcached sous `Windows` il vous faut télécharger le zip [depuis ce lien](http://downloads.northscale.com/memcached-win64-1.4.4-14.zip) &rarr; Windows 64bits

Ensuite dezipez l'archive et lancez une invite de commande (**en tant qu'administrateur**), il faut être situé dans le répertoire de `memcached.exe` (par ex: `c:\memcached\`) pour exécuter la commande `c:\memcached\memcached.exe -d install`.

Pour lancer memcached(invite de commande):

`c:\memcached\memcached.exe -d start`

Pour arrêter memcached(invite de commande):

`c:\memcached\memcached.exe -d stop`

#### NPM MemCached

Ensuite allez dans le dossier du projet et toujours avec l'invite de commande rentrez y ceci: `npm install memcached`

Cette commande va vous installer memcached sur votre projet NodeJS.

Et voilà! Memcached est maintenant installé sur votre ordinateur.

Si vous voulez plus d'informations concernant sont utilisation, [veuillez voir ce lien](https://github.com/3rd-Eden/memcached#readme)

### Commandes Git

Voici un petit récapitulatif des commandes git les plus utiles et utilisés

```bash
git add nom_fichier #Permet d'indexer le fichier

git branch nom_branche #Permet de créer une branche en local

git branch nom_branche -D #Permet de supprimer une branche en local

git branch -m nouveau_nom #Permet de modifier le nom de la branche courante | -M sous Windows

git branch -m  ancien_nom  nouveau_nom #Permet de modifier le nom d'une branche non courante | -M sous Windows

git branch #Liste toutes les branches en local

git branch -r #Liste toutes les branches distantes

git checkout nom_branch #Permet de changer de branche

git commit #Permet de commiter les fichiers indexés

git pull #Permet de récupérer les modifications d'une branche distante vers la branche local

git push #Permet de pousser les modifications d'une branche local vers une branche distante

git merge #Permet de fusionner deux branche

git rebase nom_branche  #Permet de récupérer tous les commits d'une branche et les intégrer à la branche courante. La différence avec un merge basique est que les commits que vous avez réalisés sur votre branche seront les premiers commits (les plus récents).
```
