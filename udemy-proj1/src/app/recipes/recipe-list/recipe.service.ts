import { Recipe } from '../recipe.model'
import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service'
import { Subject } from 'rxjs';

@Injectable()

export class RecipeService {
  recipeSelected = new Subject<Recipe>();

  constructor(
    private slService: ShoppingListService
  ) { }

  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel', 
      'This is simply a test', 
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fphotos%2Ffood-meat-recipe-power-pork-1459693%2F&psig=AOvVaw2T0zhgJ6Q3l1LZfV1-puUs&ust=1586398456222000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICT5Pbg1-gCFQAAAAAdAAAAABAD',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
      
      ),
    
    new Recipe('Burger Fat', 
    'This is simply a test', 
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fphotos%2Ffood-meat-recipe-power-pork-1459693%2F&psig=AOvVaw2T0zhgJ6Q3l1LZfV1-puUs&ust=1586398456222000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICT5Pbg1-gCFQAAAAAdAAAAABAD', 
    [
      new Ingredient('Bread', 2),
      new Ingredient('Patty', 2)
    ]),

  ]

  getRecipes() {
      return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients)

  }

  getRecipe(id: number) {
    return this.recipes[id];
  } 





}