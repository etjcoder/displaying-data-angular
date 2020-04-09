import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fphotos%2Ffood-meat-recipe-power-pork-1459693%2F&psig=AOvVaw2T0zhgJ6Q3l1LZfV1-puUs&ust=1586398456222000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICT5Pbg1-gCFQAAAAAdAAAAABAD'),
    new Recipe('A Test Recipe22', 'This is simply a test', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fphotos%2Ffood-meat-recipe-power-pork-1459693%2F&psig=AOvVaw2T0zhgJ6Q3l1LZfV1-puUs&ust=1586398456222000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICT5Pbg1-gCFQAAAAAdAAAAABAD')
  
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)

  } 

}
