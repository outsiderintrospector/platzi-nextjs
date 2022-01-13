import {IncomingMessage,ServerResponse} from 'http';

import DB from '@database'; //ES UN MANAGER CON DOS METODOS , getAll and GetId implementados en Db

const allAvos = async (request: IncomingMessage,response: ServerResponse) => {
    const db = new DB()
    const allEntries = await db.getAll()
    const quantity = allEntries.length

    response.statusCode = 200
    response.setHeader('Content-Type', 'application/json')
response.end(JSON.stringify({data: allEntries ,quantity}));
}

//se puede crear una carpeta , por eje avo porque tiene mas rutas 


export default allAvos