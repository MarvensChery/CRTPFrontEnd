# Application CRTP
## Projet Client - Application Web

### Project setup
Projet de consultation de base de données pour les étudiants de Technique policière.

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

**Le PO :** Marc Levasseur

**Le Srum Master :** David Déchaine

## Utilisation
Téléchargez les dépendances : `npm i` (faire la même chose dans backend)

Lancez le serveur avec : `npm run start`(faire la même chose dans backend(`npm run serve`))

Ouvrir: http://localhost:5000/

Pour se connecter en tant qu'**étudiant**: 
                {
                    Identifiant: e1233772
                    mot de passe: bonjour
                }

Pour se connecter en tant qu'enseignant: 
                {
                    Identifiant: e1230986
                    mot de passe: soleil
                }

Appuyez sur les 3 ligne en haut à droite pour ouvrir le menu
Appuyez sur IPPE-Recherche de personnes
Entrez les informations suivante: 
                {
                    Nom : Ducharme
                    Pronom1 : Benoit
                    Sexe: masculain
                    Date de Naissance : 31/08/1975
                }
Appuyez sur Submit;


```
npm install
```

    Vous pouvez désormais ajouter une personne

Allez sur http://localhost:5000/personnes?=5 :

### Lints and fixes files
```
npm run lint
```


## Les Routes

Get d’un événement IPPE


    URL: /personne/{idPersonne}/ippe


Ajout/Modification/suppresion dune personne


    URL: /personne/{idPersonne}


Ajout/Modification d’une adresse de personne


    URL: /adressePersonne/{idPersonne}


Ajout/Modification d’une description de personne


    URL: /descriptionPersonne/{idPersonne}
