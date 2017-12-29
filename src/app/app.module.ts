import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { No404Component } from './no404/no404.component';
import { ProductComponent } from './product/product.component';
import { BuyerListComponent } from './buyer-list/buyer-list.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { ZixunComponent } from './zixun/zixun.component';
import {PermissionGuard} from "./guard/permission.guard";
import {FocusGuard} from "./guard/focus.guard";
import { GoodsComponent } from './goods/goods.component';
import {GoodsResove} from "./guard/goods.resove";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StockComponent,
    No404Component,
    ProductComponent,
    BuyerListComponent,
    SellerListComponent,
    ZixunComponent,
    GoodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PermissionGuard,FocusGuard,GoodsResove],
  bootstrap: [AppComponent]
})
export class AppModule { }
