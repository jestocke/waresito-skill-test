# Exercice 3

Dans cet exercice, l’objectif est d’afficher une deuxième table sur la même page. Cette table doit contenir la liste des produits avec leur total par conditionnement, tous lots confondus (sans afficher les détails des lots).

Lorsque le stock est mis à jour dans la première table, la seconde table doit se mettre à jour immédiatement pour refléter les nouvelles données.

## Exemple

### Table 1 - Edition du stock

| Produit   | Lot    | Conditionnement | Quantité |
| --------- | ------ | --------------- | -------- |
| Produit 1 |        | Colis           | 40       |
| Produit 2 | BATCH1 | Unité           | 10       |
| Produit 2 | BATCH2 | Unité           | 30       |
| Produit 2 | BATCH1 | Colis           | 34       |
| Produit 3 | BATCH3 | Colis           | 34       |
| Produit 3 | BATCH4 | Colis           | 60       |

### Table 2 - Stock total par produit

| Produit   | Total Unité | Total Colis | Total Palette |
| --------- | ----------- | ----------- | ------------- |
| Produit 1 | 400         | 40          | 20            |
| Produit 2 | 720         | 36          | 8             |
| Produit 3 | 9400        | 94          | 2             |
