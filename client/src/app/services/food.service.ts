import { Injectable } from '@angular/core';
import { sample_foods } from 'src/data';
import { Food } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    //Feteches All Food from API
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm:string){
    //Filters Food from user input "SearchTerm" and returns those objects
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
}
