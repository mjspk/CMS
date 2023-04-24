import "reflect-metadata"
import { DataSource } from "typeorm"
import { Contact } from "../entities/Contact";
import { EmailMessage } from "../entities/EmailMessage";
import serverConfig from '../config/ServerConfig';

// the AppDataSource class is responsible for establishing the database connection
const AppDataSource = new DataSource({
    type: "mysql",
    host: serverConfig.MYSQL_HOST,
    port: serverConfig.MYSQL_PORT,
    username: serverConfig.MYSQL_USER,
    password: serverConfig.MYSQL_PASSWORD,
    database: serverConfig.MYSQL_DATABASE,
    entities: [Contact, EmailMessage],
    synchronize: true,
    logging: false,
})

// initialize the database connection
AppDataSource.initialize()
    .then(() => {
        console.log("Database connection established")
    })
    .catch((error) => console.log(error))
// export the AppDataSource instance
export { AppDataSource }