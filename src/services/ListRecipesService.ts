import { injectable, inject } from 'tsyringe';

import { IRecipes } from '../entities/Recipes';

import { isString } from '../utils/utils';

import AppError from '../errors/AppError';

import IRecipesRepository from '../repositories/IRecipesRepository';

interface IRequest {
  keywords: string | any;
}

@injectable()
class ListRecipesService {
  constructor(
    @inject('RecipesRepository')
    private recipesRepository: IRecipesRepository,
  ) {}

  public async execute({ keywords }: IRequest): Promise<IRecipes> {
    if (!isString(keywords)) {
      throw new AppError('This param i (ingredients) required a string.');
    }

    if (keywords === undefined || keywords === '') {
      throw new AppError(
        'It is missing a param i (ingredients) value(s).',
        404,
      );
    }

    const ingredients = keywords.split(',');

    if (ingredients.length > 3) {
      throw new AppError(
        'This param i (ingredients) just allow at maximum three ingredients.',
        403,
      );
    }
    const recipes = await this.recipesRepository.findRecipes(ingredients);
    return recipes;
  }
}

export default ListRecipesService;
