# Test-SOYYO
para el funcionamiento de esta aplicacion es necesario tener en cuenta las siguientes instrucciones: 

* clonar y/o copiar el repositorio de github 
* correr el Dockerfile habilitando el puerto 3001  


`docker run -dp 3001:3001 co.com.soyyo.entity.filter-dev-1_0_0`


* una vez se este ejecutando el archivo y nos indique que esta escuchando por el puerto

* podemos utilizar cualquier aplicacion que nos permita enviar una peticion POST a la ruta:

`http://localhost:3001/api/`

* debemos enviar un  JSON por medio del body con el rango inicial y el final 
* ejemplo:

```
{ 
    "inicial": 1 ,
    "final": 3
    
}
```

* una vez enviado el JSON por body la aplicacion responde con un array de objetos tomados de la API y organizados alfabeticamente
* ejemplo:

```
[
    {
        "entityId": 2,
        "name": "Bancolombia",
        "identificationNumber": "987654321",
        "attributeValidator": null,
        "expirationDate": "2030-10-27",
        "contactName": "Mauricio Serna Florez",
        "contactMail": "msflore@bancolombia.com.co",
        "ipAddress": "",
        "logo": "logo_entidad_bancolombia.png",
        "domain": null
    },
    {
        "entityId": 3,
        "name": "Mi Aguila",
        "identificationNumber": "9008508671",
        "attributeValidator": null,
        "expirationDate": "2030-10-27",
        "contactName": "Manuela Castro",
        "contactMail": "manuela.castro@miaguila.com",
        "ipAddress": "",
        "logo": "",
        "domain": null
    },
    {
        "entityId": 1,
        "name": "Tuya",
        "identificationNumber": "123456789",
        "attributeValidator": null,
        "expirationDate": "2030-10-27",
        "contactName": "Ana Maria Palacio",
        "contactMail": "APalacioH@tuya.com.co",
        "ipAddress": "",
        "logo": "logo_entidad_tuya.png",
        "domain": null
    }
]
```
## Nota:
la ruta creada arrojara error en caso de digitar un String o en caso de que el rango inicial sea mayor al final 