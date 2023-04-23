import { Router } from 'express';
import contactRouter from './ContactRoutes';

const routes = Router();

routes.use(contactRouter);

export default routes;


