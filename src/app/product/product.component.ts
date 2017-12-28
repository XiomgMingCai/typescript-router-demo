import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private productID: number;

  constructor(private routeInfo: ActivatedRoute) {
  }
//
  ngOnInit() {
    // this.productID = this.routeInfo.snapshot.params["id"]; //快照：只会在初始化时赋值
    this.routeInfo.params.subscribe((params: Params) => this.productID = params['id'])//subscribe订阅

  }
}
