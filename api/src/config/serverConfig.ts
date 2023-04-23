
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
}
require('dotenv').config();
const serverConfig: Config = {
    SERVER_URL: process.env.SERVER_URL || 'localhost',
    BASE_PATH: process.env.BASE_PATH || '/api',
    API_PORT: Number(process.env.API_PORT) || 3000,
    HTTP_PROTOCOL: process.env.HTTP_PROTOCOL || 'http',
    NODE_ENV: process.env.NODE_ENV || 'development',
    MYSQL_HOST: process.env.MYSQL_HOST || 'localhost',
    MYSQL_USER: process.env.MYSQL_USER || 'root',
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || 'root',
    MYSQL_DATABASE: process.env.MYSQL_DATABASE || 'contacts',
    MYSQL_PORT: Number(process.env.MYSQL_PORT) || 3306,
}
export default serverConfig;


