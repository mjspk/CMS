import "reflect-metadata"
import { DataSource } from "typeorm"
import { Contact } from "../entities/Contact";
import serverConfig from '../config/serverConfig';


const AppDataSource = new DataSource({
    type: "mysql",
    host: serverConfig.MYSQL_HOST,
    port: serverConfig.MYSQL_PORT,
    username: serverConfig.MYSQL_USER,
    password: serverConfig.MYSQL_PASSWORD,
    database: serverConfig.MYSQL_DATABASE,
    entities: [Contact],
    synchronize: true,
    logging: false,
})

AppDataSource.initialize()
    .then(() => {
        console.log("Database connection established")
    })
    .catch((error) => console.log(error))

export { AppDataSource }