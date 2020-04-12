import { Injectable } from '@angular/core';
import {Promotion} from '../shared/promotion'
import {promotions} from '../shared/promotions'

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions() : Promotion[]{
    return promotions;
  }

  getDish(id: String) : Promotion {
    //use arrow function
    return promotions.filter((promo)=> (promo.id === id))[0]
   }

   getFeatured() : Promotion{
    return promotions.filter((promo)=>(promo.featured))[0];
   }


}
