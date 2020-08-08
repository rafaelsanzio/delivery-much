import { IRecipes } from '../entities/Recipes';

export default interface IRecipesRepository {
  findRecipes(keywords: string[]): Promise<IRecipes>;
}
