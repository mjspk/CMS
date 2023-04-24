import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import routes from './routes';
const swaggerDocument = require('./config/swagger.json');
import serverConfig from './config/ServerConfig';
import "reflect-metadata"


dotenv.config();

let api: any;
// the server object is responsible for starting and stopping the server
const server = {
    launchServer() {
        return new Promise<void>((resolve, reject) => {
            try {
                const app = express();
                app.use(express.json());
                app.use((err: any, req: any, res: any, next: any) => {
                    if (err) {
                        res.status(400).json({
                            errorMessage: 'wrong request data'
                        })
                    } else {
                        next();
                    }
                });
                // only enable swagger documentation in development mode
                if (serverConfig.NODE_ENV === 'development') {
                    app.use(
                        serverConfig.BASE_PATH + '/docs',
                        swaggerUi.serve,
                        swaggerUi.setup(swaggerDocument)
                    );
                    console.log(`Swagger documentation is available at http://localhost:${serverConfig.API_PORT}${serverConfig.BASE_PATH}/docs`)
                }
                // enable CORS
                app.use(cors());
                app.use(String(serverConfig.BASE_PATH), routes);
                api = app.listen(serverConfig.API_PORT, () => {
                    console.log(`Contacts API listening on port ${serverConfig.API_PORT}`);
                    app.emit("App running");
                });
            } catch (error) {
                console.log(error);
                this.stopServer();
                reject(error);
            }
        });
    },

    stopServer() {
        shutDownServer();
    }
};

export default server;
// shutDownServer is a helper function that shuts down the server
function shutDownServer() {
    if (api) {
        console.log("Server is shutting down...");
        api.close(() => {
            console.log("server down.");
            process.exit(0);
        });
    } else {
        console.log("Server shutting down...");
        process.exit(0);
    }
    setTimeout(() => {
        console.log("Shutting server down forcefully...");
        process.exit(1);
    }, 3000);
}
