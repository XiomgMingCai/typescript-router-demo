import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {query} from "@angular/core/src/animation/dsl";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  stockID: number;
  foucs: boolean = false;

  constructor(private routeInfo: ActivatedRoute) {
  }


  ngOnInit() {
    // this.stockID = this.routeInfo.snapshot.queryParams.id
    this.routeInfo.queryParams.subscribe((queryParam: any) => {
      this.stockID = queryParam['id'];
    })

    //https://stackoverflow.com/questions/40699229/subscribe-to-both-route-params-and-queryparams-in-angular-2
  }

  isFocus() {
    return this.foucs
  }
}
