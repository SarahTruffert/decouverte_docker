FROM python:3
WORKDIR /app
COPY requirements.txt .
# Installe requirements et pip3
RUN pip3 install -r requirements.txt
#permet de faire la copie d'un ou plusieurs fichier 
COPY . .
#Branche sur port 5000(port d' écoute par défaut)
EXPOSE 5000
#lance gunicorn (cmd par défaut)
CMD ["gunicorn" , "--bind", "0.0.0.0:5000", "wsgi:app"]