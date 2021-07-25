import { Component, OnInit } from '@angular/core';
import { dish } from 'src/app/shared/dish';
import { DishService } from 'src/app/services/dish.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  dishes : dish[] ;

  selecteddish : dish;
  constructor(private dishservice : DishService) { 
  
  }
  onselect(dish: dish){
    this.selecteddish = dish;
  }
  ngOnInit(): void {
    this.dishes = this.dishservice.getdishes();
  }

}
