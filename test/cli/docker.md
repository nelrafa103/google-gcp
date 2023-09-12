# Comandos utilizandos

 Si tienes alguna duda sobre las opciones que te ofrece docker,
 siempre puede ejecutar ``docker ${opcion} --help``.


- Crear imagen:``docker build -t  gcr.io/406274290999/${nombre de imagen:tag} -f Dockerfile .``

- Correr contenedor:``docker run -d -p 8000:8000 ${nombre de la imagen}``(Corriendo imagen en background)

- Agregar tag ``docker tag ${nombre de la imagen existente} ${nuevo nombre}``