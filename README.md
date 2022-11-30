# Calendrier de l'avent donuts
Voici le résultat du challenge du calendrier de l'avent. Certes, il y a des choses qui restent à faire mais mon manque d'apprentissge et la contrainte de temps font que je suis obligé de rendre le site en l'état.
### Ce qu'il me reste à faire 
Comme dit plus haut je n'ai pas pu finir entièrement le site ou en tout cas dans un résultat proche du votre maquette mais voilà ce que je devrais amélioré en premier lieu et les plus grosses améliorations à faire:
- Améliorer le responsive qui est quasi inexistant !!!et le css pour les autres navigateur!!!
- Amélioer les cases du calendrier pour que ce soit plus proche de la maquette.
- Ajouter un cms afin de pouvoir avoir des cases de meilleures qualités car l'utilisation du tableau n'est pas la meilleure des choses niveau optimisation.
- Refactorer mon code car le but de React est d'utiliser des components.
- Eviter d'utiliser la fonction getColor et le style à l'intérieur du react et tout mettre dans le scss.
- Pipeline CI/CD.

## Challenge rencontrer
J'ai rencontrer 2 principaux challenge sur ce projet le premier étant la grid pour les cases du calendrier. J'ai eu de la peine à avoir un résulat comme le votre mais j'ai essayé de me rapprocher au plus de votre maquette. Les tailles différente a été le plus compliqué et je n'ai par exemple pas réussi à faire des petites cases.
Le deuxième principale challenge a été de devoir afficher le bon résultat quand on appuye sur une case. J'ai du chercher pendant plusieurs heures comment faire pour retourner seulement les infos d'une case plutôt que tout le tableau. Mais j'y suis arrivé en cherchant des solutions sur internet et en essayant plusieurs options (et beaucoup de console.log un peu partout).

## Installation et lancement du site en local
Pour répliquer le site sur votre ordinateur il vous faudra:

- Cloner le projet sur votre machine
- Rentrer dans le dossier de votre machine
-- ```cd christmas ```
- faire la commande npm install pour installer tout les modules au bon fonctionnement du projet
-- ```npm install```
- Après l'installation des modules il vous suffit de faire la commande ```npm start``` à fin de lancer le projet

## Pour déployer le site sur internet

- Utiliser vercel cli si vous ne l'avez pas vous pouvez faire ```sudo npm i -g vercel```
- Après l'avoir installer correctement et que votre compte vercel soit lié à vercel CLI vous pouvez effectuer la commande ```vercel deploy```
- Après quelque secondes vous pourrez simplement cliquer sur le lien mis à disposition et vous pourrez voir le résultat

## Technologies utilisé 
Pour ce site internet j'ai utilisé ReactJs avec javascript ainsi que du scss pour le style et vercel pour le déploiement du site web. Je n'ai pas utilisé de CMS pour mettre du contenu dans les cases mais simplement un tableau (```data.js```). Pas scalable mais efficace.


