import { Routes } from "@angular/router";

import { MenuComponent } from './Mycomponents/menu/menu.component';
import { DishdetailComponent } from './Mycomponents/dishdetail/dishdetail.component';
import { HomeComponent } from './Mycomponents/home/home.component';

export const routes : Routes=[
    {path : 'home',component : HomeComponent},
    {path : 'menu',component : MenuComponent},
    {path : '', redirectTo: '/home', pathMatch: 'full'}
];