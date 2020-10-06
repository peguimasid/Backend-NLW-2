import express from 'express';

import ClassController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionController';

const routes = express.Router();
const classesControllers = new ClassController();
const connectionsController = new ConnectionsController();

routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;