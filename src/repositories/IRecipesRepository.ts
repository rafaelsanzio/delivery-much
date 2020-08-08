import { IRecipes } from '../entities/recipes';

export default interface IProductsRepository {
  findRecipes(keywords: string[]): Promise<IRecipes>;
}
