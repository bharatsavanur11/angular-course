import { Injectable } from '@angular/core';
import {Dish} from '../shared/dish';
import {DISHES} from '../shared/dishes';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

   getDishes(): Dish[] {
     return DISHES;
   }

   getDish(id: String) : Dish {
    //use arrow function
    return DISHES.filter((dish)=> (dish.id === id))[0]
   }

   getFeatured() : Dish{
    return DISHES.filter((dish)=>(dish.featured))[0];
   }

}
