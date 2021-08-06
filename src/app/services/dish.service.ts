import { Injectable } from '@angular/core';
import { dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  getdishes(): dish[]{
    return DISHES;
  } 
  getDish(id: number) : dish{
    return DISHES.filter((d) => (d.id === id))[0];
  }
  getFeatureddish() : dish{
    return DISHES.filter((d) => d.active)[0];
  }
  constructor() { }
}
