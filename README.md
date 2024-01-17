# Projet Back-End Express.js - API de Gestion de Recettes

## Description du Projet
Ce projet vise à créer une API robuste de gestion de recettes en utilisant Express.js comme framework back-end et MongoDB comme base de données. L'API permet des opérations CRUD (Create, Read, Update, Delete) sur les recettes grâce à des endpoints spécifiques. La structure d'Express.js facilite l'interaction avec la base de données MongoDB, assurant un stockage efficace et sécurisé des données de recettes, et fournissant une base solide pour les applications frontales futures.

## Fonctionnalités Principales
- **Création de Recettes :** Utilisation d'un endpoint dédié pour ajouter de nouvelles recettes avec des détails tels que la catégorie, le nom, les ingrédients, et les instructions.
- **Lecture de Recettes :** Endpoint pour récupérer des informations sur une recette spécifique ou obtenir la liste complète de toutes les recettes.
- **Mise à Jour de Recettes :** Endpoint permettant de mettre à jour les détails d'une recette existante en fonction de son identifiant.
- **Suppression de Recettes :** Endpoint pour supprimer une recette en fonction de son identifiant.

## Technologies Utilisées
- **Express.js :** Framework web pour Node.js facilitant le développement d'API robustes.
- **MongoDB :** Base de données NoSQL utilisée pour stocker les données de recettes de manière flexible.
- **Mongoose :** ODM (Object Data Modeling) pour MongoDB, facilitant l'interaction avec la base de données.
- **Node.js :** Environnement d'exécution JavaScript côté serveur.
- **RESTful API :** Architecture de conception pour la création d'API basée sur les principes REST.

## Installation et Configuration
1. **Clonage du Projet :** Clonez ce dépôt sur votre machine locale en utilisant la commande suivante :
   ```
   git clone https://github.com/votre-utilisateur/projet-gestion-recettes.git
   ```

2. **Installation des Dépendances :** Accédez au répertoire du projet et installez les dépendances à l'aide de la commande suivante :
   ```
   npm install
   ```

3. **Configuration de la Base de Données :** Assurez-vous de configurer les paramètres de connexion à MongoDB dans le fichier approprié (par exemple, `config.js` ou `.env`).

4. **Démarrage du Serveur :** Lancez le serveur en utilisant la commande :
   ```
   npm start
   ```

## Endpoints API
- **Création de Recette :**
  ```
  POST /api/recettes
  ```

- **Lecture de Recettes :**
  - Récupération de toutes les recettes :
    ```
    GET /api/recettes
    ```
  - Récupération d'une recette spécifique :
    ```
    GET /api/recettes/:id
    ```

- **Mise à Jour de Recette :**
  ```
  PUT /api/recettes/:id
  ```

- **Suppression de Recette :**
  ```
  DELETE /api/recettes/:id
  ```

## Exemple d'utilisation

### Création de Recette
Utilisez la commande suivante pour ajouter une nouvelle recette :
```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "category": "Dessert",
  "name": "Tarte aux Pommes",
  "ingredients": ["pommes", "sucre", "pâte brisée"],
  "instructions": "Préchauffez le four à 180°C. Épluchez et coupez les pommes en tranches. Disposez-les sur la pâte brisée, saupoudrez de sucre. Enfournez pendant 30 minutes."
}' http://localhost:3000/api/recettes
```

### Lecture de Recettes
#### Toutes les Recettes
Obtenez la liste complète de toutes les recettes :
```bash
curl http://localhost:3000/api/recettes
```

#### Une Recette Spécifique
Obtenez les détails d'une recette spécifique en remplaçant `:id` par l'identifiant de la recette :
```bash
curl http://localhost:3000/api/recettes/:id
```

### Mise à Jour de Recette
Utilisez la commande suivante pour mettre à jour les détails d'une recette existante en remplaçant `:id` par l'identifiant de la recette :
```bash
curl -X PUT -H "Content-Type: application/json" -d '{
  "category": "Dessert",
  "name": "Tarte aux Pommes Modifiée",
  "ingredients": ["pommes", "sucre", "pâte brisée", "cannelle"],
  "instructions": "Préchauffez le four à 180°C. Épluchez et coupez les pommes en tranches. Ajoutez de la cannelle. Disposez-les sur la pâte brisée, saupoudrez de sucre. Enfournez pendant 30 minutes."
}' http://localhost:3000/api/recettes/:id
```

### Suppression de Recette
Utilisez la commande suivante pour supprimer une recette en remplaçant `:id` par l'identifiant de la recette :
```bash
curl -X DELETE http://localhost:3000/api/recettes/:id
```
