//la ruta dinamica id va a estar cambiando constantemente en avo/id por ello el []

import {NextApiRequest,NextApiResponse} from 'next'// es el metodo http de antes pero con funcionalidades agregadas , espero id porque cree el archivo con el nombre id 

import DB from '@database'; //ES UN MANAGER CON DOS METODOS , getAll and GetId implementados en Db

const allAvos = async (request: NextApiRequest,response: NextApiResponse) => {
    const db = new DB()

    //capturo el id 
   const id =  request.query.id

//ahora busco el item relacionado 

    const entry = await db.getById(id as string )

//lo envío
    response.statusCode = 200
    response.setHeader('Content-Type', 'application/json')
response.end(JSON.stringify({data: entry}));
}

//se puede crear una carpeta , por eje avo porque tiene mas rutas 


export default allAvos