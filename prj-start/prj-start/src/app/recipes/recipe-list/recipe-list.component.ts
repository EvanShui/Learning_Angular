import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/70/36/6f/70366f7a-1b93-4e9f-5383-2ba2d6462aa7/mzl.lgsmqjja.jpg/300x0w.jpg'),
    new Recipe('A Test Recipe #2', 'This is simply a test', 'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/70/36/6f/70366f7a-1b93-4e9f-5383-2ba2d6462aa7/mzl.lgsmqjja.jpg/300x0w.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

}
