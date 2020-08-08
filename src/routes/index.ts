import { Router } from 'express';

import recipesRouter from './recipes.routes';

const routes = Router();

routes.use('/recipes', recipesRouter);

export default routes;
