import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  private stockID:number;
  constructor(private routeInfo:ActivatedRoute) { }

  ngOnInit() {
    this.stockID = this.routeInfo.snapshot.queryParams.id
  }

}
