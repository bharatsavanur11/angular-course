
import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-dishdetails',
  templateUrl: './dishdetails.component.html',
  styleUrls: ['./dishdetails.component.scss']
})
export class DishDetailComponent implements OnInit {

  dish: Dish;

  constructor(private dishService: DishService, private location: Location, private activatedRouteService: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRouteService.snapshot.params['id'];
    this.dishService.getDish(id).then((dish) => {
      this.dish = dish;
    });
  }

  goBack(): void {
    this.location.back();
  }

}