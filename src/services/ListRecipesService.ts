import { injectable, inject } from 'tsyringe';

import { IRecipes } from '../entities/recipes';

import IRecipesRepository from '../repositories/IRecipesRepository';

interface IRequest {
  keywords: Array<string>;
}

@injectable()
class ListRecipesService {
  constructor(
    @inject('RecipesRepository')
    private recipesRepository: IRecipesRepository,
  ) {}

  public async execute({ keywords }: IRequest): Promise<IRecipes> {
    const recipes = await this.recipesRepository.findRecipes(keywords);
    return recipes;
  }
}

export default ListRecipesService;
