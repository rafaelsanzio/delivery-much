import axios from 'axios';

import IRecipesRepository from './IRecipesRepository';

// import { IRecipes, IRecipe } from '../entities/recipes';
// import AppError from '../errors/AppError';

interface Recipe {
  title: string;
  ingredients: string;
  href: string;
  gif: string;
}

class RecipesRepository implements IRecipesRepository {
  public async findRecipes(keywords: string[]): Promise<any> {
    const ingredientsValues = keywords.toString();

    const requestRecipes = await axios.get(
      `http://www.recipepuppy.com/api/?i=${ingredientsValues}`,
    );

    const recipes = await Promise.all(
      requestRecipes.data.results.map(async (recipe: Recipe) => {
        const ingredients = recipe.ingredients.split(', ');

        const requestGIPHY = await axios.get(
          `http://api.giphy.com/v1/gifs/search?q=${recipe.title.trim()}&api_key=BZZJZtqw73HpPUN1JjS2lmaS3Xkwirw8&limit=1`,
        );

        const arrRecipes = {
          title: recipe.title.trim(),
          ingredients,
          href: recipe.href,
          gif: requestGIPHY.data.data[0].url,
        };
        return arrRecipes;
      }),
    );
    return { keywords, recipes };
  }
}

export default RecipesRepository;
