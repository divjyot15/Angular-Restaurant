import { Component, OnInit } from '@angular/core';
import { dish } from 'src/app/shared/dish';
import { DishService } from 'src/app/services/dish.service';
import { Promotion } from 'src/app/shared/promotion';
import { PromotionService } from 'src/app/services/promotion.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featureddish: dish;
  promotion :Promotion;
  constructor(private DISHSERVICE : DishService ,
    private PROMOTIONSERVICE :PromotionService) { }

  ngOnInit(): void {
    this.featureddish = this.DISHSERVICE.getFeatureddish();
    this.promotion = this.PROMOTIONSERVICE.getFeaturedpromotion();
  }

}
