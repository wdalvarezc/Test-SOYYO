# Test-SOYYO
para el funcionamiento de esta aplicacion es necesario tener en cuenta las siguientes instrucciones: 

###### clonar y/o copiar el repositorio de github 
###### correr el Dockerfile habilitando el puerto 3001  


`docker run -dp 3001:3001 co.com.soyyo.entity.filter-dev-1_0_0`


###### una vez se este ejecutando el archivo y nos indique que esta escuchando por el puerto

###### podemos utilizar cualquier aplicacion que nos permita enviar una peticion POST a la ruta:

`http://localhost:3001/api/`

###### debemos enviar un # JSON ###### con el rango inicial y el final 
###### ejemplo:

`{ "inicial": 2 , "final": 4}`

