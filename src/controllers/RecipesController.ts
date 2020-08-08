import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { isString } from '../utils/utils';

import ListRecipesService from '../services/ListRecipesService';
import AppError from '../errors/AppError';

export default class RecipesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const ingredients = request.query.i;

    if (!isString(ingredients)) {
      throw new AppError(
        'It is missing a param i (ingredients) required a string.',
      );
    }

    if (ingredients === undefined || ingredients === '') {
      throw new AppError(
        'It is missing a param i (ingredients) value(s).',
        404,
      );
    }

    const keywords = ingredients.split(',');

    if (keywords.length > 3) {
      throw new AppError(
        'This param i (ingredients) just allow at maximum three ingredients.',
        403,
      );
    }

    const listRecipes = container.resolve(ListRecipesService);

    const recipes = await listRecipes.execute({
      keywords,
    });

    return response.json(recipes);
  }
}
