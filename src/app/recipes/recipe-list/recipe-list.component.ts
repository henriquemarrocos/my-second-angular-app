import { Component, OnInit } from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://www.cookipedia.co.uk/wiki/images/f/ff/Lohikeitto_Salmon_soup_recipe.jpg'),
    new Recipe('A test recipe', 'This is simply a test', 'https://www.cookipedia.co.uk/wiki/images/f/ff/Lohikeitto_Salmon_soup_recipe.jpg')
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
