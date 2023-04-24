import { Router } from 'express';
import contactRouter from './ContactRoutes';
import emailMessageRouter from './EmailRoutes';
// routes for /contacts and /contact endpoints
const routes = Router();

routes.use(contactRouter);
routes.use(emailMessageRouter);

export default routes;


