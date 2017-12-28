import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {StockComponent} from "./stock/stock.component";
import {No404Component} from "./no404/no404.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'stock',component:StockComponent},
  {path:'**',component:No404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
