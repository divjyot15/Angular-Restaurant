import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotion_info';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  getpromotions(): Promotion[]{
    return PROMOTIONS;
  } 
  getPromotion(id: number) : Promotion{
    return PROMOTIONS.filter((p) => (p.id === id))[0];
  }
  getFeaturedpromotion() : Promotion{
    return PROMOTIONS.filter((p) => p.featured)[0];
  }
  constructor() { }
}
