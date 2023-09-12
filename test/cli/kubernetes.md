# Comandos para kubernetes

Esta seccion no creo que de momento va a contener gran cosa,
pues se estara utilizado archivos yaml. Una cosa muy importante:
el puerto externo tiene que ser el mismo al puerto de los contenedores 
(Es decir el puerto en el corre el programa en cuestion).
Todo esto se podria hacer a traves de la terminal de comandos.

Aqui hay un par de ejemplos: 

- Create un Deployment: ``kubectl create deployment ${nombre del cluster} --image=${imagen de los contenedores} --port=${puerto}``
- Crear un servicio exponiendo en el puerto tal: ``kubectl expose deployment ${nombre del cluster} --type=LoadBalancer --port=${puerto}``

- Crear un servicio o deployment a partir de un archivo: `` kubectl apply -f ${nombre del archivo}.yaml``

Es buena idea utilizar la documentacion para tener una referencia de los parametros en los archivos yaml
