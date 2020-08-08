import 'reflect-metadata';

import AppError from '../errors/AppError';

import RecipesRepository from '../repositories/RecipesRepository';
import ListRecipesService from './ListRecipesService';

let recipesRepository: RecipesRepository;
let listRecipes: ListRecipesService;

describe('List Recipes', () => {
  beforeEach(() => {
    recipesRepository = new RecipesRepository();
    listRecipes = new ListRecipesService(recipesRepository);
  });

  it('should be able to list recipes', async () => {
    const recipes = await listRecipes.execute({
      keywords: `onion,tomato`,
    });

    expect(recipes).toHaveProperty('keywords');
    expect(recipes).toHaveProperty('recipes');
  });

  it('should not be able to list recipes with more than three keywords', async () => {
    await expect(
      listRecipes.execute({
        keywords: `onion,tomato,bread,garlic`,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to list recipes without keywords', async () => {
    await expect(
      listRecipes.execute({
        keywords: ``,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to list recipes with keywords on wrong type', async () => {
    await expect(listRecipes.execute({ keywords: 4 })).rejects.toBeInstanceOf(
      AppError,
    );
    await expect(
      listRecipes.execute({ keywords: ['onion', 'tomato'] }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
