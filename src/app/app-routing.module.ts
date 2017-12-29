import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {StockComponent} from "./stock/stock.component";
import {No404Component} from "./no404/no404.component";
import {ProductComponent} from "./product/product.component";
import {BuyerListComponent} from "./buyer-list/buyer-list.component";
import {SellerListComponent} from "./seller-list/seller-list.component";
import {ZixunComponent} from "./zixun/zixun.component";
import {PermissionGuard} from "./guard/permission.guard";
import {FocusGuard} from "./guard/focus.guard";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent, data: [{isPro: true}], children: [
      {path: '', component: BuyerListComponent},
      {path: 'sellerList/:id', component: SellerListComponent},
    ]
  },
  {
    path: 'stock', component: StockComponent,
    canDeactivate: [FocusGuard]
  },
  {path: 'zixun', component: ZixunComponent, outlet: 'aux',
    canActivate:[PermissionGuard]},//只能显示在aux插座上
  {path: 'product/:id', component: ProductComponent},
  {path: '**', component: No404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
