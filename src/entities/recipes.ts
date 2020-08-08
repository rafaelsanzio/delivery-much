export type IRecipe = Array<{
  title: string;
  ingredients: string[];
  link: string;
  gif: string;
}>;

export interface IRecipes {
  keywords: string[];
  recipes: IRecipe;
}
