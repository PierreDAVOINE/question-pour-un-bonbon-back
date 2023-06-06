# Question pour un bonbon - Back

Il s'agit ici de l'API d'un projet personnel d'une application de Quiz.
Celle ci sera réalisé avec NodeJS, express, PostgreSQL, Sequelize, JWT, sqitch, JOI, bCrypt et Email-Validator.  

##  Présentation du projet

Question pour un bonbon est un projet de quiz qui permet à l'utilisateur de répondre à des quiz et gagner des bonbons.

## Installation

Installation des node_modules :

```bash
npm i
```

Initialisation des Datas :
Dans le dossier data se trouve les fichier init.sql pour créer les tables et seeding.sql pour ajouter quelques données en BDD.
Il est possible d'utiliser Sqitch pour la mise en place.

Démarrage de l'API

```bash
node index
```

## Routes

Actuellement le projet comporte les routes "users", "plants", "todo" et "garden".
