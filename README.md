# Recap react
Rappel de la matiere React.

## Mise en production
### Technique général
Pour mettre en ligne un projet en React : 
- Créer le « build » de l'application avec la commande `npm run build`.
- Cela créé un dossier `dist` qui contient :
  - Le fichier `index.html`
  - Les fichiers du dossier `public`
  - Dans `assets` le code React compilé (js, css, img, ...).
- Mettre en ligne le dossier `dist` (Exemple : Appache)

### Alternative
Utiliser des hébergeurs qui déploye l'application (CI/CD).  
Exemple avec [Vercel](https://vercel.com/) : 
- Se connecter à Vercel
- Créer un projet sur le site
- Selectionner votre projet depuis un repo git _(necessite une connexion vers le git)_
- Possibilité de configurer des variables d'env
- Cliquer sur deployer

