const { Router } = require('express');
const axios = require('axios');
const router = Router();


router.post('/', async (req, res, next) => {
    const { inicio, final } = req.body
    let miData = []

    if (typeof inicio !== 'number' || typeof final !== 'number' || inicio === 0) {

        next({ message: "Error no se encuentra para rango especificado", status: 404 })

    } else if (inicio > final) {

        res.status(400).send("Error en validacion de datos de entrada")

    } else {


        for (let index = inicio; index <= final; index++) {


            await axios.get(`https://awovcw7p76.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities/${index}`)
                .then((respuesta) => {
                    if (Object.keys(respuesta.data.data).length !== 0) {

                        miData = [...miData, respuesta.data.data]

                    }

                })

        }

        res.status(200).send(
            miData.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            }))
    }

})


module.exports = router; 