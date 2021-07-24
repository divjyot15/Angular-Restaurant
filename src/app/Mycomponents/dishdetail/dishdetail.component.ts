import { Component, Input, OnInit } from '@angular/core';
import { dish } from 'src/app/shared/dish';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})



export class DishdetailComponent implements OnInit {

@Input()
dish : dish;

  constructor() {

   }
  
  ngOnInit(): void {
  }

}
