import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  foods:Food[] = []; //Creates Food Object with Array value of Null
  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm){
        this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm) //Feteches Filtered Food Objects from API
      }else{
        this.foods = foodService.getAll(); //Fetches All Food Objects from API
      }
    })
   }

  ngOnInit(): void {
  }

}
