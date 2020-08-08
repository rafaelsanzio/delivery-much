import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListRecipesService from '../services/ListRecipesService';

export default class RecipesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const ingredients = request.query.i;

    const listRecipes = container.resolve(ListRecipesService);

    const recipes = await listRecipes.execute({
      keywords: ingredients,
    });

    return response.json(recipes);
  }
}
