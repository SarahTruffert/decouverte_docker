# decouverte_docker
**Mode d'emploi :** 
- Télécharge dossier
- Powershell (dans dossier) docker-compose up --build
- Run navigateur : localhost:80:81 (81 chez moi, 80 déja occupé)

**WSGI**

**Contenu des Dockerfile/Docker-compose :**
- FROM: img de base (source)
- RUN : executer cmd conteneur
- ADD : Ajouter fichier dans conteneur
- WORKDIR : Modifier répertoire courant de travail
- EXPOSE : Définir ports d' écoute par défaut
- VOLUME : Volume utilisable
- CMD : commande par défaut pour éxécuter conteneur docker


**Les commandes générales :**
- Lancer conteneur : "-d" détacher conteneur + "-p 8080:80" définit port + "nom de l'image"
- DOCKER PS : Docker en cours de fonctionnement (id, status ect..)
- DOCKER SYSTEME PRUNE : Remove dockers pas utiles
- DOCKER PULL (+ nom de l'image) : Récupère img sans la lancer 
- Docker IMAGE -a : affiche mes images
- docker-compose up --build : build les images du docker compose
- docker build -t (nom img) -docker-build : -t permet de donner un nom à votre image Docker + . est le répertoire où se trouve le Dockerfile (racine)
