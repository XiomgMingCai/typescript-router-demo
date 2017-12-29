import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {StockComponent} from "./stock/stock.component";
import {No404Component} from "./no404/no404.component";
import {ProductComponent} from "./product/product.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: [{isPro: true}]},
  {path: 'stock', component: StockComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: '**', component: No404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
