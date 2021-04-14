# decouverte_docker

**Docker file.txt commandes générales :**
- FROM: img de base (source)
- RUN : executer cmd conteneur
- ADD : Ajouter fichier dans conteneur
- WORKDIR : Modifier répertoire courant de travail
- EXPOSE : Définir ports d' écoute par défaut
- VOLUME : Volume utilisable
- CMD : commande par défaut pour éxécuter conteneur docker


**Les commandes :**
- "-d" détacher conteneur + "-p 8080:80" définit port + "nom de l'image"
- DOCKER PS : Docker en cours de fonctionnement (id, status ect..)
- DOCKER SYSTEME PRUNE : Remove dockers pas utiles
- DOCKER PULL (+ nom de l'image) : Récupère img sans la lancer 
- Docker IMAGE -a : affiche mes images
- docker-compose up --build : build les images du docker compose
- docker-compose build (+nom de l'image) 
