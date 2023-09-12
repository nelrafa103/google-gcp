# Comandos de GCP 

Como subir una imagen: 
 - Es necesario activar image repository
 - Activar Container Registry (Sera remplazado) por Artifact registry 


- Configurar una region de Artifact registry como default: ```gcloud auth configure-docker \
  us-docker.pkg.dev```

- Subir imagen a GCP: ``docker push gcr.io/${id del proyecto}/${nombre del proyecto} ``
Parece que el servicio container registry sera remplazado por artifact registry.
Este ultimo tiene ciertas diferencias con su antecesor,pues hay una division por region


- Bajar una imagen: ``docker pull gcr.io/${id del projecto}/${nombre del projecto}``
- Configurar la autenticacion de docker para usar glcoud: ``gcloud auth configure-docker ``
- Logearte en Gcloud cli: ``gcloud auth login`` (Esta es forma recomendable de hacer las cosas)
