import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private productID: number;

  constructor(private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    this.productID = this.routeInfo.snapshot.params["id"];
  }
}
