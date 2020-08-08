import { container } from 'tsyringe';

import IRecipesRepository from '../repositories/IRecipesRepository';
import RecipesRepository from '../repositories/RecipesRepository';

container.registerSingleton<IRecipesRepository>(
  'RecipesRepository',
  RecipesRepository,
);
