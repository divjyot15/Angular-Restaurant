import { Component, OnInit } from '@angular/core';
import { dish } from 'src/app/shared/dish';
import { DISHES } from 'src/app/shared/dishes'; 


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  dishes : dish[] = DISHES;

  selecteddish : dish;
  constructor() { 
  
  }
  onselect(dish: dish){
    this.selecteddish = dish;
  }
  ngOnInit(): void {
  }

}
