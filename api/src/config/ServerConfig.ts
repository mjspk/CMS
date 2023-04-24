
export interface Config {
    SERVER_URL: string;
    BASE_PATH: string;
    API_PORT: number;
    HTTP_PROTOCOL: string;
    NODE_ENV: string;
    MYSQL_HOST: string;
    MYSQL_USER: string;
    MYSQL_PASSWORD: string;
    MYSQL_DATABASE: string;
    MYSQL_PORT: number;
    EMAIL_HOST: string;
    EMAIL_PORT: number;
    EMAIL_USER: string;
    EMAIL_PASSWORD: string;
}
require('dotenv').config();
// load environment variables from .env file
const serverConfig: Config = {
    SERVER_URL: process.env.SERVER_URL,
    BASE_PATH: process.env.BASE_PATH,
    API_PORT: Number(process.env.API_PORT),
    HTTP_PROTOCOL: process.env.HTTP_PROTOCOL,
    NODE_ENV: process.env.NODE_ENV,
    MYSQL_HOST: process.env.MYSQL_HOST,
    MYSQL_USER: process.env.MYSQL_USER,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    MYSQL_DATABASE: process.env.MYSQL_DATABASE,
    MYSQL_PORT: Number(process.env.MYSQL_PORT),
    EMAIL_HOST: process.env.EMAIL_HOST,
    EMAIL_PORT: Number(process.env.EMAIL_PORT),
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
}
export default serverConfig;


