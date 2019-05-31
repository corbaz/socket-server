import Server from './clases/server';
import { SERVER_PORT } from './global/enviroment';
import { router } from './routers/router';
import bodyParser from "body-parser";
import cors from "cors";


const NOMBRE = "julio cesrar";
console.log('NOMBRE :', NOMBRE);

const SERVER = new Server();

//bodyParser
SERVER.app.use(bodyParser.urlencoded({ extended: true }));
SERVER.app.use(bodyParser.json());

// cors
SERVER.app.use(cors({ origin: true, credentials: true }));

// Rutas de servicios
SERVER.app.use("/", router);

SERVER.metodo_servidor_ON(() => {
    console.log(`SERVIDOR LEVANTADO EN EL port: ${SERVER_PORT}`);

})
