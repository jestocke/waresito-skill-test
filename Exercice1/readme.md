# Exercice 1

Dans cet exercice tu devras réaliser un **composant ReactJS de type table** avec la possibilité d’éditer des cellules de différents types. Tu as le droit d’utiliser une librairie de ton choix mais le code de l’exercice devra être en **TypeScript**.

**Liste des colonnes de cette table**

-   Nom du produit
-   Conditionnement (colonne éditable, liste de choix)
-   Quantité (colonne éditable)
-   Stock (colonne calculée)

Pour réaliser cet exercice, tu auras un jeu de données complet dans le fichier `_products.ts`.

Voici un aperçu du résultat attendu en vidéo pour le produit nommé `Produit 1` (les colonnes `Stock entrepôt` et `Stock disponible`) 👇

https://github.com/jestocke/waresito-skill-test/assets/58423069/d44eb34f-d1e7-419b-913c-994ad2aa8d6f


## Contexte métier

Notre solution propose à des clients de créer des bons de commandes pour réaliser des entrées/sorties de leurs produits dans des entrepôts.

Les produits peuvent être conditionnés sous différentes formes (en **unité**, sous forme de **colis** ou encore de **palette**).

Nous permettons à nos utilisateurs de pouvoir visualiser en permanence l’état de leur stock dans ces différents conditionnements, des conversions sont donc nécessaires. Pour cela, nous avons deux champs dans notre modèle `Produit` : `unitPerBox` (nombre d’unités dans un colis), et `boxPerPallet` (nombre de colis par palette).
